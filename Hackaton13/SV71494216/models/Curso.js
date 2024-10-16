const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  img: { type: String, required: true },
  portada: { type: String, required: true },
  valor: { type: Number, required: true },
});

module.exports = mongoose.model('Curso', cursoSchema);
