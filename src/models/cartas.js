const Sequelize = require('sequelize');
const db = require("../connection/db");

const cartas = db.define('cartas',{
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },  
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: fals
    },

});

module.exports = cartas;
