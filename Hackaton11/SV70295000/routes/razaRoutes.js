// routes/razaRoutes.js

const express = require('express');
const router = express.Router();
const razaController = require('../controllers/razaController'); // Asegúrate de que esta ruta es correcta

// Definir las rutas
router.get('/', razaController.obtenerRazas); // Verifica que esta función esté definida
router.post('/', razaController.crearRaza); // Verifica que esta función esté definida

module.exports = router;
