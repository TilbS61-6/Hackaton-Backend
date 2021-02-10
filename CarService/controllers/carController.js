const Car = require('../models/car');

const CarController = () => {

    // get all cars (test purposes)
    const getAllCars = async (req, res, next) => {
        const cars = await Car.findAll();
        if (!cars) {
            return res.status(400).send("Request failed");
        } else {
            return cars
        }
    };
    return {
        allCars: getAllCars
    }
}
module.exports =  CarController();
