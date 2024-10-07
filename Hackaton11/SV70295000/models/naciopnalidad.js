// models/Nacionalidad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nacionalidad = sequelize.define('Nacionalidad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  createdAt: 'fechaCreacion',
  updatedAt: 'fechaModificacion'
});

module.exports = Nacionalidad;
