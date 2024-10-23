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


db.colores = require("./color.model.js")(sequelize, Sequelize);
db.colores.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.colores.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.sexo = require("./sexo.model.js")(sequelize, Sequelize);
db.sexo.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.sexo.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.nacionalidades = require("./nacionalidad.model.js")(sequelize, Sequelize);
db.nacionalidades.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.nacionalidades.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.ubigeos = require("./ubigeo.model.js")(sequelize, Sequelize);
db.ubigeos.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.ubigeos.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });


db.propietarios = require("./propietario.model.js")(sequelize, Sequelize);
db.propietarios.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.propietarios.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });
db.propietarios.belongsTo(db.ubigeos, {
        foreignKey: "idUbigeo",
        as: "ubigeoPropietario",
    });
db.propietarios.belongsTo(db.nacionalidades, {
        foreignKey: "idNacionalidad",
        as: "nacionalidadPropietario",
    });


db.mascotas = require("./mascota.model.js")(sequelize, Sequelize);
db.mascotas.belongsTo(db.usuarios, {
        foreignKey: "usrCreacion",
        as: "usuarioIdCreacion",
    });
db.mascotas.belongsTo(db.usuarios, {
        foreignKey: "usrModificacion",
        as: "usuarioIdModificacion",
    });
db.mascotas.belongsTo(db.especies, {
        foreignKey: "idEspecie",
        as: "mascotaEspecie",
    });
db.mascotas.belongsTo(db.razas, {
        foreignKey: "idRaza",
        as: "mascotaRaza",
    });
db.mascotas.belongsTo(db.colores, {
        foreignKey: "idColor",
        as: "mascotaColor",
    });
db.mascotas.belongsTo(db.sexo, {
        foreignKey: "idSexo",
        as: "mascotaSexo",
    });
db.mascotas.belongsTo(db.propietarios, {
        foreignKey: "idPropietario",
        as: "mascotaPropietario",
    });


db.vacunas.belongsToMany(db.mascotas, {
    through: "mascota_vacuna",
    as: "mascotas",
    foreignKey: "idVacuna",
});

db.mascotas.belongsToMany(db.vacunas, {
    through: "mascota_vacuna",
    as: "vacunas",
    foreignKey: "idMascota",
});

module.exports = db;