const express = require('express');
const router = express.Router();
const paquetesController = require('../controllers/paquetesController');
const { verificarToken } = require('../middleware/auth');

// Crear un nuevo paquete
router.post('/', verificarToken, paquetesController.crearPaquete);

// Obtener todos los paquetes de un usuario
router.get('/', verificarToken, paquetesController.obtenerPaquetes);

// Obtener detalles de un paquete por ID
router.get('/:id', verificarToken, paquetesController.obtenerPaquetePorId);

// Actualizar el estado de un paquete
router.put('/:id', verificarToken, paquetesController.actualizarEstadoPaquete);

// Eliminar un paquete
router.delete('/:id', verificarToken, paquetesController.eliminarPaquete);

module.exports = router;
