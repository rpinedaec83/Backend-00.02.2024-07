const express = require('express');
const router = express.Router();
const sexoController = require('../controllers/sexoController');

// Ruta para obtener todos los sexos
router.get('/', sexoController.getAllSexos);

// Ruta para obtener un sexo por ID
router.get('/:id', sexoController.getSexoById);

// Ruta para crear un nuevo sexo
router.post('/', sexoController.createSexo);

// Ruta para actualizar un sexo por ID
router.put('/:id', sexoController.updateSexo);

// Ruta para eliminar un sexo por ID
router.delete('/:id', sexoController.deleteSexo);

module.exports = router;
