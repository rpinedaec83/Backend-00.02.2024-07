// routes/propietarioRoutes.js
const express = require('express');
const propietarioController = require('../controllers/propietarioController');
const router = express.Router();

// Definir rutas para propietario
router.get('/', propietarioController.getPropietarios);
router.post('/', propietarioController.createPropietario);
router.put('/:id', propietarioController.updatePropietario);
router.delete('/:id', propietarioController.deletePropietario);

module.exports = router;
