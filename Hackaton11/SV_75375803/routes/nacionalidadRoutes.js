const express = require('express');
const router = express.Router();
const nacionalidadController = require('../controllers/nacionalidadController');

// Ruta para obtener todas las nacionalidades
router.get('/', nacionalidadController.getAllNacionalidades);

// Ruta para obtener una nacionalidad por ID
router.get('/:id', nacionalidadController.getNacionalidadById);

// Ruta para crear una nueva nacionalidad
router.post('/', nacionalidadController.createNacionalidad);

// Ruta para actualizar una nacionalidad por ID
router.put('/:id', nacionalidadController.updateNacionalidad);

// Ruta para eliminar una nacionalidad por ID
router.delete('/:id', nacionalidadController.deleteNacionalidad);

module.exports = router;
