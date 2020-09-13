const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./db/dbConnection");
const path = require("path");

const serviceRoutes = require("./routes/service");
const pricesRoutes = require("./routes/prices");
const orderRoutes = require("./routes/order");
const paypalRoutes = require("./routes/paypal");

require("dotenv").config();

const app = express();
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;

app.use("/assets", express.static("assets"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyparser.json());

app.use("/service", serviceRoutes.routes);
app.use("/prices", pricesRoutes.routes);
app.use("/order", orderRoutes.routes);
app.use("/paypal", paypalRoutes.routes);

app.listen(port, host, () => {
  console.log("Server Running at " + host + ":" + port);
});
