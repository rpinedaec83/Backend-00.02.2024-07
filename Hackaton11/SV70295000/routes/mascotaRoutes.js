// routes/mascotaRoutes.js
const express = require('express');
const mascotaController = require('../controllers/Mascotacontroller');
const router = express.Router();

// Definir rutas para mascota
router.get('/', mascotaController.getMascotas);
router.post('/', mascotaController.createMascota);
router.put('/:id', mascotaController.updateMascota);
router.delete('/:id', mascotaController.deleteMascota);

module.exports = router;
