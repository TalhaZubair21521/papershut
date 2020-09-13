const mysql = require("mysql");

require("dotenv").config();

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database_name = process.env.DATABASE;

let database = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database_name,
});

database.connect(function (err) {
  if (err) {
    return console.error("Error: " + err.message);
  }
  console.log("Connected to the SQL Database");
});

module.exports = database;
