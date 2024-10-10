const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clients = require("./clients.js")(sequelize, Sequelize);
db.pets = require("./pets.js")(sequelize, Sequelize);

db.clients.hasMany(db.pets, { as: "pets" });
db.pets.belongsTo(db.clients, {
    foreingKey: 'clientid',
    as: 'client',
})

module.exports = db;
