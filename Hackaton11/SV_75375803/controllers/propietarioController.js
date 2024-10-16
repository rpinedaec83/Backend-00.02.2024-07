const Propietario = require('../models/propietarioModel');

const getAllPropietarios = (req, res) => {
    Propietario.getAllPropietarios((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los propietarios');
        } else {
            res.json(results);
        }
    });
};

const getPropietarioById = (req, res) => {
    const id = req.params.id;
    Propietario.getPropietarioById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener el propietario');
        } else if (!result) {
            res.status(404).send('Propietario no encontrado');
        } else {
            res.json(result);
        }
    });
};

const createPropietario = (req, res) => {
    const propietarioData = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        ubigeo: req.body.ubigeo,
        direccion: req.body.direccion,
        idNacionalidad: req.body.idNacionalidad,
        usrCreacion: req.body.usrCreacion
    };
    Propietario.createPropietario(propietarioData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear el propietario');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updatePropietario = (req, res) => {
    const id = req.params.id;
    const propietarioData = req.body;
    Propietario.updatePropietario(id, propietarioData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar el propietario');
        } else {
            res.status(200).send(`Propietario con ID: ${id} actualizado`);
        }
    });
};

const deletePropietario = (req, res) => {
    const id = req.params.id;
    Propietario.deletePropietario(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el propietario');
        } else {
            res.status(200).send(`Propietario con ID: ${id} eliminado`);
        }
    });
};

module.exports = {
    getAllPropietarios,
    getPropietarioById,
    createPropietario,
    updatePropietario,
    deletePropietario
};
