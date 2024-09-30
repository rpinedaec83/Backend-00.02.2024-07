const express = require('express');
const especieController = require('../controllers/especieController');
const router = express.Router();

router.get('/', especieController.getEspecies);
router.post('/', especieController.createEspecie);
router.put('/', especieController.updateEspecie);
router.delete('/', especieController.deleteEspecie);

module.exports = router;