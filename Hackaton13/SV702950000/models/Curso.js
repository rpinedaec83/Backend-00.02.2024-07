const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String, required: false },
  portada: { type: String, required: false },
  valor: { type: Number, required: true }
});

module.exports = mongoose.model('Curso', CursoSchema);
