const orderController = require("../controllers/order");

const multer = require("multer");

const express = require("express");
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    var filename = Date.now() + "-" + encodeURIComponent(file.originalname);
    req.filename = filename;
    cb(null, filename);
  },
});

var upload = multer({ storage: storage });

router.post("/calculatePrice", orderController.CalculatePrice);
router.post("/createOrder", upload.single("file"), orderController.CreateOrder);

exports.routes = router;
