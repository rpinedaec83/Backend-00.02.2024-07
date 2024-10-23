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


    app.use('/api', router);
}