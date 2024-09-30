// models/Ubigeo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ubigeo = sequelize.define('Ubigeo', {
  ubigeo: {
    type: DataTypes.STRING(6),
    primaryKey: true
  },
  departamento: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  provincia: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  distrito: {
    type: DataTypes.STRING(50),
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

module.exports = Ubigeo;
