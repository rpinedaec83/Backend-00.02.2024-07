const Ubigeo = require('../models/ubigeoModel');

const getAllUbigeos = (req, res) => {
    Ubigeo.getAllUbigeos((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los ubigeos');
        } else {
            res.json(results);
        }
    });
};

const getUbigeoById = (req, res) => {
    const ubigeo = req.params.ubigeo;
    Ubigeo.getUbigeoById(ubigeo, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener el ubigeo');
        } else if (!result) {
            res.status(404).send('Ubigeo no encontrado');
        } else {
            res.json(result);
        }
    });
};

const createUbigeo = (req, res) => {
    const ubigeoData = req.body;
    Ubigeo.createUbigeo(ubigeoData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear el ubigeo');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateUbigeo = (req, res) => {
    const ubigeo = req.params.ubigeo;
    const ubigeoData = req.body;
    Ubigeo.updateUbigeo(ubigeo, ubigeoData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar el ubigeo');
        } else {
            res.status(200).send(`Ubigeo con ID: ${ubigeo} actualizado`);
        }
    });
};

const deleteUbigeo = (req, res) => {
    const ubigeo = req.params.ubigeo;
    Ubigeo.deleteUbigeo(ubigeo, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el ubigeo');
        } else {
            res.status(200).send(`Ubigeo con ID: ${ubigeo} eliminado`);
        }
    });
};

module.exports = {
    getAllUbigeos,
    getUbigeoById,
    createUbigeo,
    updateUbigeo,
    deleteUbigeo
};
