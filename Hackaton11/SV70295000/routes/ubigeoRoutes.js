// routes/ubigeoRoutes.js
const express = require('express');
const ubigeoController = require('../controllers/ubigeoController');
const router = express.Router();

// Definir rutas para ubigeo
router.get('/', ubigeoController.getUbigeos);
router.post('/', ubigeoController.createUbigeo);
router.put('/:ubigeo', ubigeoController.updateUbigeo);
router.delete('/:ubigeo', ubigeoController.deleteUbigeo);

module.exports = router;
