const db = require("../models");
const Op = db.Sequelize.Op;
const User = db.users;
const Historial = db.history;

// Crear nuevo usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        name: req.body.name,
    };
    User.create(user).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Encontrar todos los usuarios
exports.findAll = (req, res) => {
    const name = req.query.name;
    console.log(name)
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    console.log(condition);
    Client.findAll({
    }, { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the clients."
            });
        });
};

// Encontrar usuario segun el nombre
exports.findOne = (req, res) => {
    const nombre = req.params.name;

    User.findOne(req.body, {
        where: { name: nombre}
    })
        .then(data => {
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: "Can not find User with name=" + nombre
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with name=" + nombre
            });
        });
};

// Actualizar un usuario usando su id
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Eliminar un usuario segun su id
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe Client was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// Eliminar todos los usuarios
exports.deleteAll = (req, res) => {
    User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
      });
};

// Crear historial de un usuario
exports.createHistory = (req, res)=>{
    const userId = req.params.id;
    const historial = {
        rol: req.body.rol,
        mensaje: req.body.mensaje,
      };
    Historial.create({
        rol: historial.rol,
        mensaje: historial.mensaje,
        userId: userId,
    })
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };