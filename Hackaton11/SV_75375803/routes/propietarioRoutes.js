const express = require('express');
const router = express.Router();
const propietarioController = require('../controllers/propietarioController');

// Ruta para obtener todos los propietarios
router.get('/', propietarioController.getAllPropietarios);

// Ruta para obtener un propietario por ID
router.get('/:id', propietarioController.getPropietarioById);

// Ruta para crear un nuevo propietario
router.post('/', propietarioController.createPropietario);

// Ruta para actualizar un propietario por ID
router.put('/:id', propietarioController.updatePropietario);

// Ruta para eliminar un propietario por ID
router.delete('/:id', propietarioController.deletePropietario);

module.exports = router;
