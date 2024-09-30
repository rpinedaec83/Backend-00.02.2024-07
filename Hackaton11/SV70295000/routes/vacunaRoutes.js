// routes/vacunaRoutes.js
const express = require('express');
const vacunaController = require('../controllers/vacunaController');
const router = express.Router();

// Definir rutas para vacuna
router.get('/', vacunaController.getVacunas);
router.post('/', vacunaController.createVacuna);
router.put('/:id', vacunaController.updateVacuna);
router.delete('/:id', vacunaController.deleteVacuna);

module.exports = router;
