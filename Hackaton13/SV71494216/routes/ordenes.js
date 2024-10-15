const express = require('express');
const { crearOrden, obtenerOrdenes, actualizarOrden, eliminarOrden } = require('../controllers/ordenController');
const router = express.Router();

router.post('/', crearOrden);
router.get('/', obtenerOrdenes);
router.put('/:id', actualizarOrden);
router.delete('/:id', eliminarOrden);

module.exports = router;
