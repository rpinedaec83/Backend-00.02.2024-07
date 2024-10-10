const express = require('express');
const router = express.Router();
const vacunaController = require('../controllers/vacunaController');

// Ruta para obtener todas las vacunas
router.get('/', vacunaController.getAllVacunas);

// Ruta para obtener una vacuna por ID
router.get('/:id', vacunaController.getVacunaById);

// Ruta para crear una nueva vacuna
router.post('/', vacunaController.createVacuna);

// Ruta para actualizar una vacuna por ID
router.put('/:id', vacunaController.updateVacuna);

// Ruta para eliminar una vacuna por ID
router.delete('/:id', vacunaController.deleteVacuna);

module.exports = router;
