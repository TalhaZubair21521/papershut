const serviceController = require("../controllers/service");

const express = require("express");
const router = express.Router();

router.get("/getServices", serviceController.GetServices);

exports.routes = router;
