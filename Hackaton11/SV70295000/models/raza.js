const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Raza = sequelize.define('Raza', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    timestamps : true,
    createdAt: 'fechaCreacion',
    updateAt: 'fechaModificacion'
});

module.exports= Raza;