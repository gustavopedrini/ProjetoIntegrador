const { DataTypes } = require("sequelize");

const db = require("../database/database.js");

// Roles
// 0 - Admins
// 1 - Citizens
// 2 - Politicians
// 3 - Employees

const Users = db.define("usuarios", {
    id: {
        field: "idUsuario",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        field: "nivelPermissao",
        type: DataTypes.TINYINT,
        allowNull: false
    },
    name: {
        field: "nome",
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cpf: {
        field: "cpf",
        type: DataTypes.STRING(11),
        allowNull: false
    },
    email: {
        field: "email",
        type: DataTypes.STRING(180),
        allowNull: false
    },
    password: {
        field: "senha",
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        field: "dataRegistro",
        type: DataTypes.DATE,
        allowNull: false
    },
    // updated_at: {
    //     field: "updated_at",
    //     type: DataTypes.DATE
    // },
}, {});


module.exports = Users;