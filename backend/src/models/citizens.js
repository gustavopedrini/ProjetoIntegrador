// FALTA CHAVE ESTRANGEIRA DE USUÁRIO!
const { DataTypes } = require("sequelize");

const db = require("../database/database.js");

const Users = require("./users.js");


const Citizens = db.define("cidadaos", {
    id: {
        field: "idCidadao",
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_user: {
        field: "idUsuario",
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        }
    },
    photo: {
        field: "foto",
        type: DataTypes.BLOB,
        allowNull: true
    },
    description: {
        field: "descricao",
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    createdAt: false,
    updatedAt: false
});


Citizens.belongsTo(Users, { foreignKey: 'id_user', allowNull: false });


module.exports = Citizens;