const express = require('express');
const { crearCurso, obtenerCursos, actualizarCurso, eliminarCurso } = require('../controllers/cursoController');
const router = express.Router();

router.post('/', crearCurso);
router.get('/', obtenerCursos);
router.put('/:id', actualizarCurso);
router.delete('/:id', eliminarCurso);

module.exports = router;
