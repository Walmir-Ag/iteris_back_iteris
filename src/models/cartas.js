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
        allowNull: false
    },
    type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    hp: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    attack: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    defense: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    special_attack: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    special_defense: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    speed: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = cartas;
