const express = require('express');
const router = express.Router();
const mascotaController = require('../controllers/mascotaController');

// Ruta para obtener todas las mascotas
router.get('/', mascotaController.getAllMascotas);

// Ruta para obtener una mascota por ID
router.get('/:id', mascotaController.getMascotaById);

// Ruta para crear una nueva mascota
router.post('/', mascotaController.createMascota);

// Ruta para actualizar una mascota por ID
router.put('/:id', mascotaController.updateMascota);

// Ruta para eliminar una mascota por ID
router.delete('/:id', mascotaController.deleteMascota);

module.exports = router;
