const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// Ruta para obtener un usuario por ID
router.get('/:id', usuarioController.getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Ruta para actualizar un usuario por ID
router.put('/:id', usuarioController.updateUsuario);

// Ruta para eliminar un usuario por ID
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
