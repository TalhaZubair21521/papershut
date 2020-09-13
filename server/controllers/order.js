const db = require("../db/dbConnection");
const mysql = require("mysql");
const moment = require("moment");
const calculation = require("./functions/findingCategory");

exports.CalculatePrice = (req, res) => {
  let order = req.body;
  userDate = new moment(new Date(order.deadline_date));
  currentDate = new moment();
  hours = currentDate.diff(userDate, "hours");
  days = currentDate.diff(userDate, "days");
  let category;
  if (hours > 24) {
    category = calculation.findingCategory(days, "days");
  } else {
    category = calculation.findingCategory(hours, "hours");
  }
  var sql = mysql.format(
    "select price from prices where academic_id=? AND timerange=?;",
    [order.academic_level, category]
  );
  db.query(sql, function (err, result, fields) {
    if (err) {
      res.json({ message: err.sqlMessage });
    }
    result = result[0].price * order.pages;
    res.json({ result: result });
  });
};

exports.CreateOrder = (req, res) => {
  const data = { filename: req.filename, other: req.body };
  res.redirect("/paypal/pay/?value=" + JSON.stringify(data));
};
