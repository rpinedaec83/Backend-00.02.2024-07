module.exports = app => {
    let router = require("express").Router();
    const users = require("../controllers/users.controller.js");

    router.post("/", users.create);
    router.get("/", users.findAll);
    router.get("/:name", users.findOne);
    router.put("/:name", users.update);
    router.delete("/:id", users.delete);
    router.delete("/", users.deleteAll);

    router.post("/history/:id", users.createHistory);

    app.use('/api/users', router);

}