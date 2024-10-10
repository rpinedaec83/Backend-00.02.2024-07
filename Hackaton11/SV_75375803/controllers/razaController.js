const Raza = require('../models/razaModel');

const getAllRazas = (req, res) => {
    Raza.getAllRazas((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las razas');
        } else {
            res.json(results);
        }
    });
};

const getRazaById = (req, res) => {
    const id = req.params.id;
    Raza.getRazaById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la raza');
        } else if (!result) {
            res.status(404).send('Raza no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createRaza = (req, res) => {
    const razaData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Raza.createRaza(razaData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la raza');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateRaza = (req, res) => {
    const id = req.params.id;
    const razaData = req.body;
    Raza.updateRaza(id, razaData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la raza');
        } else {
            res.status(200).send(`Raza con ID: ${id} actualizada`);
        }
    });
};

const deleteRaza = (req, res) => {
    const id = req.params.id;
    Raza.deleteRaza(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la raza');
        } else {
            res.status(200).send(`Raza con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllRazas,
    getRazaById,
    createRaza,
    updateRaza,
    deleteRaza
};
