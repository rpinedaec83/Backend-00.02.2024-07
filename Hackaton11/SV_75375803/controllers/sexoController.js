const Sexo = require('../models/sexoModel');

const getAllSexos = (req, res) => {
    Sexo.getAllSexos((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los sexos');
        } else {
            res.json(results);
        }
    });
};

const getSexoById = (req, res) => {
    const id = req.params.id;
    Sexo.getSexoById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener el sexo');
        } else if (!result) {
            res.status(404).send('Sexo no encontrado');
        } else {
            res.json(result);
        }
    });
};

const createSexo = (req, res) => {
    const sexoData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Sexo.createSexo(sexoData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear el sexo');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateSexo = (req, res) => {
    const id = req.params.id;
    const sexoData = req.body;
    Sexo.updateSexo(id, sexoData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar el sexo');
        } else {
            res.status(200).send(`Sexo con ID: ${id} actualizado`);
        }
    });
};

const deleteSexo = (req, res) => {
    const id = req.params.id;
    Sexo.deleteSexo(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el sexo');
        } else {
            res.status(200).send(`Sexo con ID: ${id} eliminado`);
        }
    });
};

module.exports = {
    getAllSexos,
    getSexoById,
    createSexo,
    updateSexo,
    deleteSexo
};
