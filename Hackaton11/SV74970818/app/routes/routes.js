module.exports = app => {
    let router = require("express").Router();

    const usuarios = require("../controllers/usuario.controller.js");
    router.post("/", usuarios.create);
    router.get("/", usuarios.findAll);
    router.get("/:id", usuarios.findOne);
    router.put("/:id", usuarios.update);
    router.delete("/:id", usuarios.delete);
    router.delete("/", usuarios.deleteAll);
    app.use('/api/usuarios', router);


    const vacunas = require("../controllers/vacuna.controller.js");
    router.post("/", vacunas.create);
    router.get("/", vacunas.findAll);
    router.get("/:id", vacunas.findOne);
    router.put("/:id", vacunas.update);
    router.delete("/:id", vacunas.delete);
    router.delete("/", vacunas.deleteAll);
    app.use('/api/vacunas', router);


    const especies = require("../controllers/especie.controller.js");
    router.post("/", especies.create);
    router.get("/", especies.findAll);
    router.get("/:id", especies.findOne);
    router.put("/:id", especies.update);
    router.delete("/:id", especies.delete);
    router.delete("/", especies.deleteAll);
    app.use('/api/especies', router);
}