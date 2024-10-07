// routes/colorRoutes.js
const express = require('express');
const colorController = require('../controllers/colorController');
const router = express.Router();

// Definir rutas para colores
router.get('/', colorController.getColores);
router.post('/', colorController.createColor);
router.put('/:id', colorController.updateColor);
router.delete('/:id', colorController.deleteColor);

module.exports = router;
