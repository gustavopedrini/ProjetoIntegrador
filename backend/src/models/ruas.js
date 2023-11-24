// FALTA CHAVE ESTRANGEIRA DE BAIRRO!

const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Rua = db.define('ruas', {
    idRua: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nomeRua: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idBairro: {
        field: 'idBairro',
        type: DataTypes.INTEGER,
        references: {
            model: 'bairros',
            key: 'idBairro'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
});

// Atendimento.belongsTo(Cachorro, { foreignKey: 'cachorro_id' })
// Cachorro.hasMany(Atendimento, { foreignKey: 'cachorro_id' });

module.exports = Rua;