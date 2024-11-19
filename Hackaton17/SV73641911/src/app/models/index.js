const { Sequelize } = require("sequelize");

// Passing parameters
const sequelize = new Sequelize(process.env.MYSQL_DB || 'mysql',
  process.env.MYSQL_USER|| 'mysql',
  process.env.MYSQL_PASSWORD || 'mysql',
  {
      host: process.env.MYSQL_HOST || 'localhost',
      port: process.env.MYSQL_PORT || 3306,
      dialect: 'mysql',
      dialectOptions: {
          ssl: process.env.DB_SSL == "true"
      }
  });

module.exports = sequelize;