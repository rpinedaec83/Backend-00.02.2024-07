const db = require("../models");
const Op = db.Sequelize.Op;
const Propietario = db.propietarios;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombres) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const propietario = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        idUbigeo: req.body.idUbigeo,
        direccion: req.body.direccion,
        idNacionalidad: req.body.idNacionalidad,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Propietario.create(propietario).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Propietario."
            });
        });
};
exports.findAll = (req, res) => {
    Propietario.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving propietarios."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Propietario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Propietario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Propietario with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Propietario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Propietario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Propietario with id=${id}. Maybe Propietario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Propietario with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Propietario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Propietario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Propietario with id=${id}. Maybe Propietario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Propietario with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Propietario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Propietarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all propietarios."
        });
      });
};