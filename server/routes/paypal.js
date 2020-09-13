const express = require("express");
const router = express.Router();
const paypal = require("paypal-rest-sdk");
const db = require("../db/dbConnection");
const mysql = require("mysql");
const fs = require("fs");
require("dotenv").config();

router.get("/pay", (req, res) => {
  const data = JSON.parse(req.query.value);
  const price = parseInt(data.other.price).toFixed(2).toString();
  var query_parameters = "?filename=" + encodeURIComponent(data.filename) + "&";
  for (const [key, value] of Object.entries(data.other)) {
    if (key === "price") {
      query_parameters =
        query_parameters + "" + key + "=" + encodeURIComponent(price) + "&";
    } else {
      query_parameters =
        query_parameters + "" + key + "=" + encodeURIComponent(value) + "&";
    }
  }
  query_parameters = query_parameters.slice(0, -1);
  paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.SECRET_ID,
  });
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:5000/paypal/success/" + query_parameters,
      cancel_url: "http://localhost:5000/paypal/cancel/" + query_parameters,
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Assignment",
              sku: "item",
              price: price,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: price,
        },
        description: "Assignment Order",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response.details);
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.send(payment.links[i].href);
        }
      }
    }
  });
});

router.get("/success", (req, res) => {
  const price = req.query.price;
  const data = req.query;
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: price,
        },
      },
    ],
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      var sql = mysql.format(
        "INSERT INTO `order` (email, phone, document_type, academic_id, deadline_time, number_of_pages, title, subject, citation, sources, description, price, file, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          data.email,
          data.phone,
          data.document_type,
          data.academic_level,
          data.deadline_date,
          data.pages,
          data.title,
          data.subject,
          data.citation,
          data.sources,
          data.description,
          price,
          data.filename,
          "false",
        ]
      );
      db.query(sql, function (err, result, fields) {
        if (err) {
          res.json({ message: err.sqlMessage });
        }
        var responseHTML =
          '<html><head><title>Main</title></head><body></body><script>alert("Payment Successfull");window.location.href="http://localhost:5000"</script></html>';
        res.status(200).send(responseHTML);
      });
    }
  });
});
router.get("/cancel", (req, res) => {
  const filename = req.query.filename;
  fs.unlinkSync("assets/" + filename);
  var responseHTML =
    '<html><head><title>Main</title></head><body></body><script>alert("Payment Cancelled");window.location.href="http://localhost:5000"</script></html>';
  res.status(200).send(responseHTML);
});

exports.routes = router;
