// FALTA CHAVE ESTRANGEIRA DE USUÁRIO E USUÁRIOSEGUIDO!

const { DataTypes } = require('sequelize');
const db = require('../database/database.js');

const Seguidor = db.define('seguidores', {
    idSeguidor: {
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

    idUsuarioSeguido: {
        field: 'idUsuarioSeguido', // isso aki pode dar erro, tenho q rever quando for testar o código
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

module.exports = Curtida;