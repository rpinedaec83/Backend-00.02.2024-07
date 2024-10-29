const express = require('express');
const router = express.Router();
const cuponesController = require('../controllers/cuponesController');

// Crear un cupón
router.post('/cupones', cuponesController.crearCupon);

// Obtener todos los cupones
router.get('/cupones', cuponesController.obtenerCupones);

// Obtener un cupón por ID
router.get('/cupones/:id', cuponesController.obtenerCuponPorId);

// Actualizar un cupón
router.put('/cupones/:id', cuponesController.actualizarCupon);

// Eliminar un cupón
router.delete('/cupones/:id', cuponesController.eliminarCupon);

module.exports = router;
