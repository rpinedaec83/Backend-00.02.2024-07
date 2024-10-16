const Usuario = require('../models/usuarioModel');

// Controlador para manejar las operaciones de `tblUsuario`
const getAllUsuarios = (req, res) => {
    Usuario.getAllUsuarios((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los usuarios');
        } else {
            res.json(results);
        }
    });
};

const getUsuarioById = (req, res) => {
    const id = req.params.id;
    Usuario.getUsuarioById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener el usuario');
        } else if (!result) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.json(result);
        }
    });
};

const createUsuario = (req, res) => {
    const usuarioData = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        usrCreacion: req.body.usrCreacion
    };
    Usuario.createUsuario(usuarioData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear el usuario');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuarioData = req.body;
    Usuario.updateUsuario(id, usuarioData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar el usuario');
        } else {
            res.status(200).send(`Usuario con ID: ${id} actualizado`);
        }
    });
};

const deleteUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.deleteUsuario(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.status(200).send(`Usuario con ID: ${id} eliminado`);
        }
    });
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
