const db = require("../models");
const Op = db.Sequelize.Op;
const Ubigeo = db.ubigeos;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.ubigeo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const ubigeo = {
        ubigeo: req.body.ubigeo,
        departamento: req.body.departamento,
        provincia: req.body.provincia,
        distrito: req.body.distrito,
        activo: req.body.activo ? req.body.activo : true,
        usrCreacion: req.body.usrCreacion,
        usrModificacion: req.body.usrModificacion ? req.body.usrModificacion : null
    };
    Ubigeo.create(ubigeo).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Ubigeo."
            });
        });
};
exports.findAll = (req, res) => {
    Ubigeo.findAll({
    }, { where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ubigeos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Ubigeo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Ubigeo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Ubigeo with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Ubigeo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ubigeo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Ubigeo with id=${id}. Maybe Ubigeo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Ubigeo with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Ubigeo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ubigeo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Ubigeo with id=${id}. Maybe Ubigeo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ubigeo with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Ubigeo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Ubigeo were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Ubigeos."
        });
      });
};