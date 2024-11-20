require('dotenv').config();
const sequelize = require('sequelize')

const sequelize = new sequelize(process.env.DB_NAME, process.env.USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;