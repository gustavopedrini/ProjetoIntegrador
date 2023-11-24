// FALTA CHAVE ESTRANGEIRA DE ESTADO!

const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Bairro = db.define('bairros', {
    idBairro: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nomeBairro: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idEstado: {
        field: 'idEstado',
        type: DataTypes.INTEGER,
        references: {
            model: 'estados',
            key: 'idEstado'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

// Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorro_id' })
// Cachorro.hasMany(Atendimento, { foreignKey: 'cachorro_id' });

module.exports = Bairro;