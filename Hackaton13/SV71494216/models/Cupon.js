const mongoose = require('mongoose');

const cuponSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  descuento: { type: Number, required: true },
  fechaExpiracion: { type: Date, required: true },
  activo: { type: Boolean, default: true },
});

module.exports = mongoose.model('Cupon', cuponSchema);
