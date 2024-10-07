// models/Propietario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ubigeo = require('./ubigeo');
const Nacionalidad = require('./Nacionalidad');

const Propietario = sequelize.define('Propietario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  ubigeo: {
    type: DataTypes.STRING(6),
    allowNull: false,
    references: {
      model: Ubigeo,
      key: 'ubigeo'
    }
  },
  direccion: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  idNacionalidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Nacionalidad,
      key: 'id'
    }
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

module.exports = Propietario;
