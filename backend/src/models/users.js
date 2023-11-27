const { DataTypes } = require("sequelize");

const db = require("../database/database.js");

// Roles
// 0 - Admins
// 1 - Citizens
// 2 - Politicians
// 3 - Employees

const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(180),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        field: "updated_at",
        type: DataTypes.DATE
    },
}, {});


module.exports = Users;