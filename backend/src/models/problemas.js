const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Problema = db.define('problemas', {
    idProblema: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nomeProblema: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Problema;