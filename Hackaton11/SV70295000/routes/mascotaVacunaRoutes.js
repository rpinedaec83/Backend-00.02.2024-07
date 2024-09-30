// routes/mascotaVacunaRoutes.js
const express = require('express');
const mascotaVacunaController = require('../controllers/mascotaVacunaController');
const router = express.Router();

// Definir rutas para MascotaVacuna
router.get('/', mascotaVacunaController.getMascotaVacunas);
router.post('/', mascotaVacunaController.createMascotaVacuna);
router.put('/:id', mascotaVacunaController.updateMascotaVacuna);
router.delete('/:id', mascotaVacunaController.deleteMascotaVacuna);

module.exports = router;
