// FALTA CHAVE ESTRANGEIRA DE USUÁRIO!

const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Cidadao = db.define('cidadaos', {
    idCidadao: {
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
    }
}, {
    createdAt: false,
    updatedAt: false
});

// Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorro_id' })
// Cachorro.hasMany(Atendimento, { foreignKey: 'cachorro_id' });

module.exports = Cidadao;