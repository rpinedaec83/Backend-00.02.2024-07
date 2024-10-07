const Vacuna = require('../models/vacunaModel');

// Controlador para manejar las operaciones de `tblVacunas`
const getAllVacunas = (req, res) => {
    Vacuna.getAllVacunas((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las vacunas');
        } else {
            res.json(results);
        }
    });
};

const getVacunaById = (req, res) => {
    const id = req.params.id;
    Vacuna.getVacunaById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la vacuna');
        } else if (!result) {
            res.status(404).send('Vacuna no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createVacuna = (req, res) => {
    const vacunaData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Vacuna.createVacuna(vacunaData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la vacuna');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateVacuna = (req, res) => {
    const id = req.params.id;
    const vacunaData = req.body;
    Vacuna.updateVacuna(id, vacunaData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la vacuna');
        } else {
            res.status(200).send(`Vacuna con ID: ${id} actualizada`);
        }
    });
};

const deleteVacuna = (req, res) => {
    const id = req.params.id;
    Vacuna.deleteVacuna(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la vacuna');
        } else {
            res.status(200).send(`Vacuna con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllVacunas,
    getVacunaById,
    createVacuna,
    updateVacuna,
    deleteVacuna
};
