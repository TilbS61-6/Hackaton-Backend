const express = require("express");
const router = express.Router();
const CarController = require("../controllers/carController");

router.get("/all", CarController.allCars);
router.post("/add", CarController.saveCar);
router.get("/getByUuid", CarController.getCar);

module.exports = router;
