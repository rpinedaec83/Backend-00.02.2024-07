const express = require('express');
const { crearUsuario, login } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/registrar', crearUsuario);
router.post('/login', login);

module.exports = router;
