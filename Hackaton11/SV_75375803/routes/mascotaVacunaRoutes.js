const express = require('express');
const router = express.Router();
const mascotaVacunaController = require('../controllers/mascotaVacunaController');

// Ruta para obtener todas las relaciones de mascota y vacuna
router.get('/', mascotaVacunaController.getAllMascotaVacunas);

// Ruta para obtener una relación de mascota y vacuna por ID
router.get('/:id', mascotaVacunaController.getMascotaVacunaById);

// Ruta para crear una nueva relación de mascota y vacuna
router.post('/', mascotaVacunaController.createMascotaVacuna);

// Ruta para actualizar una relación de mascota y vacuna por ID
router.put('/:id', mascotaVacunaController.updateMascotaVacuna);

// Ruta para eliminar una relación de mascota y vacuna por ID
router.delete('/:id', mascotaVacunaController.deleteMascotaVacuna);

module.exports = router;
