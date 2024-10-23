module.exports = app => {
    let router = require("express").Router();

    const usuarios = require("../controllers/usuario.controller.js");
    router.post("/usuarios/", usuarios.create);
    router.get("/usuarios/", usuarios.findAll);
    router.get("/usuarios/:id", usuarios.findOne);
    router.put("/usuarios/:id", usuarios.update);
    router.delete("/usuarios/:id", usuarios.delete);
    router.delete("/usuarios/", usuarios.deleteAll);


    const vacunas = require("../controllers/vacuna.controller.js");
    router.post("/vacunas/", vacunas.create);
    router.get("/vacunas/", vacunas.findAll);
    router.get("/vacunas/:id", vacunas.findOne);
    router.put("/vacunas/:id", vacunas.update);
    router.delete("/vacunas/:id", vacunas.delete);
    router.delete("/vacunas/", vacunas.deleteAll);


    const especies = require("../controllers/especie.controller.js");
    router.post("/especies/", especies.create);
    router.get("/especies/", especies.findAll);
    router.get("/especies/:id", especies.findOne);
    router.put("/especies/:id", especies.update);
    router.delete("/especies/:id", especies.delete);
    router.delete("/especies/", especies.deleteAll);


    const razas = require("../controllers/raza.controller.js");
    router.post("/razas/", razas.create);
    router.get("/razas/", razas.findAll);
    router.get("/razas/:id", razas.findOne);
    router.put("/razas/:id", razas.update);
    router.delete("/razas/:id", razas.delete);
    router.delete("/razas/", razas.deleteAll);


    const colores = require("../controllers/color.controller.js");
    router.post("/colores/", colores.create);
    router.get("/colores/", colores.findAll);
    router.get("/colores/:id", colores.findOne);
    router.put("/colores/:id", colores.update);
    router.delete("/colores/:id", colores.delete);
    router.delete("/colores/", colores.deleteAll);


    const sexo = require("../controllers/sexo.controller.js");
    router.post("/sexo/", sexo.create);
    router.get("/sexo/", sexo.findAll);
    router.get("/sexo/:id", sexo.findOne);
    router.put("/sexo/:id", sexo.update);
    router.delete("/sexo/:id", sexo.delete);
    router.delete("/sexo/", sexo.deleteAll);


    const nacionalidades = require("../controllers/nacionalidad.controller.js");
    router.post("/nacionalidades/", nacionalidades.create);
    router.get("/nacionalidades/", nacionalidades.findAll);
    router.get("/nacionalidades/:id", nacionalidades.findOne);
    router.put("/nacionalidades/:id", nacionalidades.update);
    router.delete("/nacionalidades/:id", nacionalidades.delete);
    router.delete("/nacionalidades/", nacionalidades.deleteAll);


    const ubigeos = require("../controllers/ubigeo.controller.js");
    router.post("/ubigeos/", ubigeos.create);
    router.get("/ubigeos/", ubigeos.findAll);
    router.get("/ubigeos/:id", ubigeos.findOne);
    router.put("/ubigeos/:id", ubigeos.update);
    router.delete("/ubigeos/:id", ubigeos.delete);
    router.delete("/ubigeos/", ubigeos.deleteAll);


    const propietarios = require("../controllers/propietario.controller.js");
    router.post("/propietarios/", propietarios.create);
    router.get("/propietarios/", propietarios.findAll);
    router.get("/propietarios/:id", propietarios.findOne);
    router.put("/propietarios/:id", propietarios.update);
    router.delete("/propietarios/:id", propietarios.delete);
    router.delete("/propietarios/", propietarios.deleteAll);


    const mascotas = require("../controllers/mascota.controller.js");
    router.post("/mascotas/", mascotas.create);
    router.get("/mascotas/", mascotas.findAll);
    router.get("/mascotas/:id", mascotas.findOne);
    router.put("/mascotas/:id", mascotas.update);
    router.delete("/mascotas/:id", mascotas.delete);
    router.delete("/mascotas/", mascotas.deleteAll);


    app.use('/api', router);
}