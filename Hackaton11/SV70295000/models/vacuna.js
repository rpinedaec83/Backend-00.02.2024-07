// models/Vacuna.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vacuna = sequelize.define('Vacuna', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
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

module.exports = Vacuna;
