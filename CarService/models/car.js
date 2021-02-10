const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//car object moet natuurlijk uit elkaar getrokken worden, fabrikant merk etc. etc. Dit is puur voor de hackathon!!
const Car = sequelize.define("Car", {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    //string -> link naar imqur(of hoe je dat ook schrijft lmao)
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 6,
        max: 255
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 6,
        max: 50
    },
    naam: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Car;