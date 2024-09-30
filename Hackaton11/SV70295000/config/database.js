const { Sequelize } = require('sequelize');

// Configura los parámetros de conexión
const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'tu_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mysql', // o 'sqlite', 'postgres', etc.
});

module.exports = sequelize;
