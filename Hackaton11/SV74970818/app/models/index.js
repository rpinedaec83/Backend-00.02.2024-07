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

db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.usuarios.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.usuarios.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.vacunas = require("./vacuna.model.js")(sequelize, Sequelize);
db.vacunas.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.vacunas.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.especies = require("./especie.model.js")(sequelize, Sequelize);
db.especies.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.especies.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.razas = require("./raza.model.js")(sequelize, Sequelize);
db.razas.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.razas.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// db.comments = require("./comment.model.js")(sequelize, Sequelize);
// db.tag = require("./tag.model.js")(sequelize, Sequelize);

// db.tutorials.hasMany(db.comments, { as: "comments" });
// db.comments.belongsTo(db.tutorials, {
//     foreignKey: "tutorialId",
//     as: "tutorial",
// });


// db.tag.belongsToMany(db.tutorials, {
//     through: "tutorial_tag",
//     as: "tutorials",
//     foreignKey: "tag_id",
// });

// db.tutorials.belongsToMany(db.tag, {
//     through: "tutorial_tag",
//     as: "tags",
//     foreignKey: "tutorial_id",
// });

module.exports = db;