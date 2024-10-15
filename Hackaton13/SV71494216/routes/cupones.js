const express = require('express');
const { crearCupon, obtenerCupones, actualizarCupon, eliminarCupon } = require('../controllers/cuponController');
const router = express.Router();

router.post('/', crearCupon);
router.get('/', obtenerCupones);
router.put('/:id', actualizarCupon);
router.delete('/:id', eliminarCupon);

module.exports = router;
