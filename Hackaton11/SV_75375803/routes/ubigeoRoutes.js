const express = require('express');
const router = express.Router();
const ubigeoController = require('../controllers/ubigeoController');

// Ruta para obtener todos los ubigeos
router.get('/', ubigeoController.getAllUbigeos);

// Ruta para obtener un ubigeo por ID
router.get('/:id', ubigeoController.getUbigeoById);

// Ruta para crear un nuevo ubigeo
router.post('/', ubigeoController.createUbigeo);

// Ruta para actualizar un ubigeo por ID
router.put('/:id', ubigeoController.updateUbigeo);

// Ruta para eliminar un ubigeo por ID
router.delete('/:id', ubigeoController.deleteUbigeo);

module.exports = router;
