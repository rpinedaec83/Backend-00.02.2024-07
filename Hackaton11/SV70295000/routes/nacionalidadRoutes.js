// routes/nacionalidadRoutes.js
const express = require('express');
const nacionalidadController = require('../controllers/nacionalidadController');
const router = express.Router();

// Definir rutas para nacionalidades
router.get('/', nacionalidadController.getNacionalidades);
router.post('/', nacionalidadController.createNacionalidad);
router.put('/:id', nacionalidadController.updateNacionalidad);
router.delete('/:id', nacionalidadController.deleteNacionalidad);

module.exports = router;
