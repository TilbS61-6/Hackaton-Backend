const Car = require('../models/car');

const CarController = () => {

    // get all cars (test purposes)
    const getAllCars = async (req, res, next) => {
        const cars = await Car.findAll();
        if (!cars) {
            return res.status(400).send("Request failed");
        } else {
            res.send(cars).status(200)
        }
    };
    // add the car.
    const addCar = async (req, res, next) => {
        const car = new Car({
            image: req.body.image,
            name: req.body.name,
            type: req.body.type
        });
        try {
            const savedCar = await car.save();
            res.send(savedCar).status(200);
        }
        catch (e) {
            res.status(400).send(e);
        }
    };
    return {
        allCars: getAllCars,
        saveCar: addCar,
    }
}
module.exports =  CarController();
