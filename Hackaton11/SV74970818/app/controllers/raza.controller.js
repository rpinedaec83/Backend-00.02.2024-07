const db = require("../models");
const Op = db.Sequelize.Op;
const Raza = db.razas;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const raza = {
        descripcion: req.body.descripcion,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Raza.create(raza).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Raza."
            });
        });
};
exports.findAll = (req, res) => {
    Raza.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving razas."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Raza.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Raza with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Raza with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Raza.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Raza was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Raza with id=${id}. Maybe Raza was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Raza with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Raza.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Raza was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Raza with id=${id}. Maybe Raza was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Raza with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Raza.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Razas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all razas."
        });
      });
};