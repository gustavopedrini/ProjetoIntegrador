const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Status = db.define('status', {
    idStatus: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nomeStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Status;