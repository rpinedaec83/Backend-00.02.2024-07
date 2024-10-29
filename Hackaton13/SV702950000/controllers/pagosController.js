const Orden = require('../models/Orden');

exports.procesarPago = async (req, res) => {
  try {
    const { ordenId } = req.body;

    // Buscar la orden por ID
    const orden = await Orden.findById(ordenId);
    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    // Simulación de pago: generar un resultado aleatorio
    const pagoExitoso = Math.random() > 0.2; // 80% de probabilidad de éxito

    if (pagoExitoso) {
      orden.estadoPago = 'aprobado';
      orden.estado = 'pagado';
      await orden.save();
      return res.status(200).json({ message: 'Pago aprobado', orden });
    } else {
      orden.estadoPago = 'rechazado';
      await orden.save();
      return res.status(400).json({ message: 'Pago rechazado', orden });
    }

  } catch (error) {
    console.error("Error al procesar el pago:", error);
    res.status(500).json({ message: 'Error al procesar el pago', error: error.message });
  }
};
