const db = require("../models");
const Op = db.Sequelize.Op;
const Mascota = db.mascotas;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const mascota = {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        peso: req.body.peso,
        temperatura: req.body.temperatura,
        idEspecie: req.body.idEspecie,
        idRaza: req.body.idRaza,
        idColor: req.body.idColor,
        idSexo: req.body.idSexo,
        idPropietario: req.body.idPropietario,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Mascota.create(mascota).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Mascota."
            });
        });
};
exports.findAll = (req, res) => {
    Mascota.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving mascotas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Mascota.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Mascota with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Mascota with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Mascota.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mascota was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Mascota with id=${id}. Maybe Mascota was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Mascota with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Mascota.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mascota was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Mascota with id=${id}. Maybe Mascota was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Mascota with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Mascota.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Mascotas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all mascotas."
        });
      });
};