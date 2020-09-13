const db = require("../db/dbConnection");
const mysql = require("mysql");
const calculation = require("./functions/organizePricing");

exports.GetPrices = (req, res) => {
  var sql = mysql.format("Select * from prices;", []);
  db.query(sql, function (err, result, fields) {
    if (err) {
      res.json({ message: err.sqlMessage });
    }
    response = calculation.organize(result);
    res.json({ response });
  });
};
