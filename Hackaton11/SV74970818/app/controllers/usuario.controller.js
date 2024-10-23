const db = require("../models");
const Op = db.Sequelize.Op;
const Usuario = db.usuarios;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const usuario = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Usuario.create(usuario).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Usuario."
            });
        });
};
exports.findAll = (req, res) => {
    Usuario.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving usuarios."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Usuario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Usuario with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Usuario with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Usuario with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Usuarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all usuarios."
        });
      });
};