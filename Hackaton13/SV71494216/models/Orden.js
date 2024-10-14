const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
  cursoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  estado: { type: String, default: 'pendiente' },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Orden', ordenSchema);
