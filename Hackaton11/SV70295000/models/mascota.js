// models/Mascota.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Especie = require('./especie');
const Raza = require('./raza');
const Color = require('./Color');
const Sexo = require('./sexo');
const Propietario = require('./propietario');

const Mascota = sequelize.define('Mascota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  peso: {
    type: DataTypes.DECIMAL(5, 3),
    allowNull: true,
    defaultValue: 0
  },
  temperatura: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 0
  },
  idEspecie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Especie,
      key: 'id'
    }
  },
  idRaza: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Raza,
      key: 'id'
    }
  },
  idColor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: 'id'
    }
  },
  idSexo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sexo,
      key: 'id'
    }
  },
  idPropietario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Propietario,
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

module.exports = Mascota;
