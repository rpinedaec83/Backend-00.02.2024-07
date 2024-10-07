// routes/sexoRoutes.js
const express = require('express');
const sexoController = require('../controllers/sexoController');
const router = express.Router();

// Definir rutas para sexos
router.get('/', sexoController.getSexos);
router.post('/', sexoController.createSexo);
router.put('/:id', sexoController.updateSexo);
router.delete('/:id', sexoController.deleteSexo);

module.exports = router;
