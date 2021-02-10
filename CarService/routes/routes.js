const express = require("express");
const router = express.Router();
const CarController = require("../controllers/carController");

router.get("/all", CarController.allCars);

module.exports = router;
