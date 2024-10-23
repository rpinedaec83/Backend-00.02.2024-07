const db = require("../models");
const Op = db.Sequelize.Op;
const Vacuna = db.vacunas;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const vacuna = {
        descripcion: req.body.descripcion,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Vacuna.create(vacuna).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vacuna."
            });
        });
};
exports.findAll = (req, res) => {
    Vacuna.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vacunas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Vacuna.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Vacuna with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vacuna with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Vacuna.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacuna was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vacuna with id=${id}. Maybe Vacuna was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vacuna with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Vacuna.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacuna was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vacuna with id=${id}. Maybe Vacuna was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vacuna with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Vacuna.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Vacunas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all vacunas."
        });
      });
};