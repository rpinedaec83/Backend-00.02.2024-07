exports.simularPago = async (req, res) => {
    const { ordenId } = req.params;
    const orden = await Orden.findById(ordenId);
    orden.estado = 'completado';
    await orden.save();
    res.json({ mensaje: 'Pago realizado con éxito', orden });
  };
  