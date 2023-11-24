const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Usuario = db.define('usuarios', {
    idUsuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    dataRegistro: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    foto: {
        type: DataTypes.LONGBLOB,
        allowNull: true
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    nivelPermissao: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Usuario;