const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

// Ruta para obtener todos los colores
router.get('/', colorController.getAllColors);

// Ruta para obtener un color por ID
router.get('/:id', colorController.getColorById);

// Ruta para crear un nuevo color
router.post('/', colorController.createColor);

// Ruta para actualizar un color por ID
router.put('/:id', colorController.updateColor);

// Ruta para eliminar un color por ID
router.delete('/:id', colorController.deleteColor);

module.exports = router;
