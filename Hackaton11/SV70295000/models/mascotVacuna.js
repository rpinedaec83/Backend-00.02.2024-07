// models/MascotaVacuna.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Mascota = require('./mascota');
const Vacuna = require('./Vacuna');

const MascotaVacuna = sequelize.define('MascotaVacuna', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idMascota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Mascota,
      key: 'id'
    }
  },
  idVacuna: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vacuna,
      key: 'id'
    }
  },
  fechaAplicacion: {
    type: DataTypes.DATE,
    allowNull: true
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

module.exports = MascotaVacuna;
