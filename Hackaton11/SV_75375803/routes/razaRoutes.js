const express = require('express');
const router = express.Router();
const razaController = require('../controllers/razaController');

// Ruta para obtener todas las razas
router.get('/', razaController.getAllRazas);

// Ruta para obtener una raza por ID
router.get('/:id', razaController.getRazaById);

// Ruta para crear una nueva raza
router.post('/', razaController.createRaza);

// Ruta para actualizar una raza por ID
router.put('/:id', razaController.updateRaza);

// Ruta para eliminar una raza por ID
router.delete('/:id', razaController.deleteRaza);

module.exports = router;
