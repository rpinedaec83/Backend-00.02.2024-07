const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Especie = sequelize.define('Especie', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
},{
    timestamps: true,
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaModificacion'
});

module.exports= Especie