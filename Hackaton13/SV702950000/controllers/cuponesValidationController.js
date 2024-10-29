exports.validarCupon = async (req, res) => {
    try {
      const { codigo } = req.body;
      const cupon = await Cupon.findOne({ codigo });
  
      if (!cupon) {
        return res.status(404).json({ message: 'Cupón no encontrado' });
      }
  
      if (cupon.expiracion < new Date()) {
        return res.status(400).json({ message: 'Cupón expirado' });
      }
  
      if (cupon.usosDisponibles <= 0) {
        return res.status(400).json({ message: 'Cupón sin usos disponibles' });
      }
  
      res.status(200).json({ message: 'Cupón válido', cupon });
    } catch (error) {
      console.error("Error al validar el cupón:", error);
      res.status(500).json({ message: 'Error al validar el cupón', error: error.message });
    }
  };
  