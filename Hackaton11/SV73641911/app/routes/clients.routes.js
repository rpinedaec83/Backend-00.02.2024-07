module.exports = app => {
    let router = require("express").Router();
    const clients = require("../controllers/clients.controller.js");

    router.post("/", clients.create);
    router.get("/", clients.findAll);
    router.get("/:id", clients.findOne);
    router.put("/:id", clients.update);
    router.delete("/:id", clients.delete);
    router.delete("/", clients.deleteAll);

    router.post("/pets/:id", clients.createPet);

    app.use('/api/clients', router);

}