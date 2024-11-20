const {DataTypes} = require('sequelize')
const sequelize = require('../db/dbConfig')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    }
})

Model.exports = User