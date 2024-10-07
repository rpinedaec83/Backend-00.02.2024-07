const express = require('express');
const router = express.Router();
const especieController = require('../controllers/especieController');

// Ruta para obtener todas las especies
router.get('/', especieController.getAllEspecies);

// Ruta para obtener una especie por ID
router.get('/:id', especieController.getEspecieById);

// Ruta para crear una nueva especie
router.post('/', especieController.createEspecie);

// Ruta para actualizar una especie por ID
router.put('/:id', especieController.updateEspecie);

// Ruta para eliminar una especie por ID
router.delete('/:id', especieController.deleteEspecie);

module.exports = router;
