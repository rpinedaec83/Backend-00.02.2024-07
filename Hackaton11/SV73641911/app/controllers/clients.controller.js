const db = require("../models");
const Op = db.Sequelize.Op;
const Client = db.clients;
const Pet = db.pets;


// Create new client
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.lastname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const client = {
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone
    };
    Client.create(client).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Client."
            });
        });
};

// Find all clients
exports.findAll = (req, res) => {
    const name = req.query.name;
    console.log(name)
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    console.log(condition);
    Client.findAll({
        // include: ["lastname", "phone"],
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

// Find a client using an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Client.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Client with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Client with id=" + id
            });
        });
};

// Update a client using the id
exports.update = (req, res) => {
    const id = req.params.id;

    Client.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Client with id=" + id
            });
        });
};

// Delete a client
exports.delete = (req, res) => {
    const id = req.params.id;

    Client.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Client with id=" + id
            });
        });
};

// Delete all clients
exports.deleteAll = (req, res) => {
    Client.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Clients were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Clients."
        });
      });
};

// Create a new pet
exports.createPet = (req, res)=>{
    const clientId = req.params.id;
    const pet = {
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
      };
    Pet.create({
      name: pet.name,
      breed: pet.breed,
      age: pet.age,
      clientId: clientId,
    })
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the client."
        });
      });
  };