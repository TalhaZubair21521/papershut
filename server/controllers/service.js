const db = require("../db/dbConnection");
const mysql = require("mysql");
exports.GetServices = (req, res) => {
  var sql = mysql.format("Select * from service;", []);
  db.query(sql, function (err, result, fields) {
    if (err) {
      res.json({ message: err.sqlMessage });
    }
    res.json({ result: result });
  });
};
