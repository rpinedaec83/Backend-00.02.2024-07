const Especie = require('../models/especieModel');

const getAllEspecies = (req, res) => {
    Especie.getAllEspecies((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las especies');
        } else {
            res.json(results);
        }
    });
};

const getEspecieById = (req, res) => {
    const id = req.params.id;
    Especie.getEspecieById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la especie');
        } else if (!result) {
            res.status(404).send('Especie no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createEspecie = (req, res) => {
    const especieData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Especie.createEspecie(especieData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la especie');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateEspecie = (req, res) => {
    const id = req.params.id;
    const especieData = req.body;
    Especie.updateEspecie(id, especieData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la especie');
        } else {
            res.status(200).send(`Especie con ID: ${id} actualizada`);
        }
    });
};

const deleteEspecie = (req, res) => {
    const id = req.params.id;
    Especie.deleteEspecie(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la especie');
        } else {
            res.status(200).send(`Especie con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllEspecies,
    getEspecieById,
    createEspecie,
    updateEspecie,
    deleteEspecie
};
