const express = require('express');
const router = express.Router();
const cursosControllers = require('../controllers/cursosControllers');

router.post('/', cursosControllers.crearCurso);
router.get('/', cursosControllers.obtenerCursos);
router.get('/:id', cursosControllers.obtenerCursoPorId);
router.put('/:id', cursosControllers.actualizarCurso);
router.delete('/:id', cursosControllers.eliminarCurso);

module.exports = router;
