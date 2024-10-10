// routes/usuarioRoutes.js
const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const router = express.Router();

// Definir rutas para usuarios
router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
