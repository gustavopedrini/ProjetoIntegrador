// FALTA CHAVE ESTRANGEIRA DE USUÁRIO E POSTAGEM!

const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Repostagem = db.define('repostagens', {
    idRepostagem: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    idUsuario: {
        field: 'idUsuario',
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'idUsuario'
        }
    },

    idPostagem: {
        field: 'idPostagem',
        type: DataTypes.INTEGER,
        references: {
            model: 'postagens',
            key: 'idPostagem'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

// Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorro_id' })
// Cachorro.hasMany(Atendimento, { foreignKey: 'cachorro_id' });

module.exports = Repostagem;