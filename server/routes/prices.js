const pricesController = require("../controllers/prices");

const express = require("express");
const router = express.Router();

router.get("/getPrices", pricesController.GetPrices);

exports.routes = router;
