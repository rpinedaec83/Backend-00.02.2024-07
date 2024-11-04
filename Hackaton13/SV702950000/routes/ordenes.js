const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordenesController');

// Crear una nueva orden
router.post('/ordenes', ordenesController.crearOrden);

// Obtener todas las órdenes
router.get('/ordenes', ordenesController.obtenerOrdenes);

// Obtener una orden por ID
router.get('/ordenes/:id', ordenesController.obtenerOrdenPorId);

// Actualizar una orden
router.put('/ordenes/:id', ordenesController.actualizarOrden);

// Eliminar una orden
router.delete('/ordenes/:id', ordenesController.eliminarOrden);

module.exports = router;
