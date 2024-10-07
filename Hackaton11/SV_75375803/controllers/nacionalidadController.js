const Nacionalidad = require('../models/nacionalidadModel');

const getAllNacionalidades = (req, res) => {
    Nacionalidad.getAllNacionalidades((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las nacionalidades');
        } else {
            res.json(results);
        }
    });
};

const getNacionalidadById = (req, res) => {
    const id = req.params.id;
    Nacionalidad.getNacionalidadById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la nacionalidad');
        } else if (!result) {
            res.status(404).send('Nacionalidad no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createNacionalidad = (req, res) => {
    const nacionalidadData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Nacionalidad.createNacionalidad(nacionalidadData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la nacionalidad');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateNacionalidad = (req, res) => {
    const id = req.params.id;
    const nacionalidadData = req.body;
    Nacionalidad.updateNacionalidad(id, nacionalidadData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la nacionalidad');
        } else {
            res.status(200).send(`Nacionalidad con ID: ${id} actualizada`);
        }
    });
};

const deleteNacionalidad = (req, res) => {
    const id = req.params.id;
    Nacionalidad.deleteNacionalidad(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la nacionalidad');
        } else {
            res.status(200).send(`Nacionalidad con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllNacionalidades,
    getNacionalidadById,
    createNacionalidad,
    updateNacionalidad,
    deleteNacionalidad
};
