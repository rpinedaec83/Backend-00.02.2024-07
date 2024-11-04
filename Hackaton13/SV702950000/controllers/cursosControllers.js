const Curso = require('../models/curso');

// Crear un curso
exports.crearCurso = async (req, res) => {
  try {
    const nuevoCurso = new Curso(req.body);
    const cursoGuardado = await nuevoCurso.save();
    res.status(201).json(cursoGuardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el curso', error });
  }
};

// Obtener todos los cursos
exports.obtenerCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cursos', error });
  }
};

// Obtener un curso por ID
exports.obtenerCursoPorId = async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ message: 'Curso no encontrado' });
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el curso', error });
  }
};

// Actualizar un curso
exports.actualizarCurso = async (req, res) => {
  try {
    const cursoActualizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cursoActualizado) return res.status(404).json({ message: 'Curso no encontrado' });
    res.status(200).json(cursoActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el curso', error });
  }
};

// Eliminar un curso
exports.eliminarCurso = async (req, res) => {
  try {
    const cursoEliminado = await Curso.findByIdAndDelete(req.params.id);
    if (!cursoEliminado) return res.status(404).json({ message: 'Curso no encontrado' });
    res.status(200).json({ message: 'Curso eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el curso', error });
  }
};
