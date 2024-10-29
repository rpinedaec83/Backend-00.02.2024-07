const express = require('express');
const router = express.Router();
const { procesarPago } = require('../controllers/pagosController');

// Ruta para procesar el pago
router.post('/pago', procesarPago);

module.exports = router;
