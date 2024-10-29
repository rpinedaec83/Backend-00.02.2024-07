const mongoose = require('mongoose');

const OrdenSchema = new mongoose.Schema({
  cursoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  usuarioId: { type: String, required: true }, // Esto puede ser un ID de usuario autenticado
  estado: { type: String, default: 'pendiente', enum: ['pendiente', 'pagado', 'cancelado'] },
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now},
  estadoPago: { type: String, default: 'pendiente', enum: ['pendiente', 'aprobado', 'rechazado'] } // Nuevo campo
  
});

module.exports = mongoose.model('Orden', OrdenSchema);
