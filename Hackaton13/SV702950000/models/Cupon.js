const mongoose = require('mongoose');

const CuponSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  descuento: { type: Number, required: true }, // Descuento en porcentaje (por ejemplo, 20 para 20%)
  expiracion: { type: Date, required: true },  // Fecha límite para usar el cupón
  usosDisponibles: { type: Number, default: 1 }, // Número de veces que el cupón puede ser usado
  activo: { type: Boolean, default: true } // Estado del cupón, si es válido o no
});

module.exports = mongoose.model('Cupon', CuponSchema);
