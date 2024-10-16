exports.crearCupon = async (req, res) => {
    try {
      const nuevoCupon = new Cupon(req.body);
      const cuponGuardado = await nuevoCupon.save();
      res.status(201).json(cuponGuardado);
    } catch (error) {
      console.error("Error al crear el cupón:", error);
      res.status(500).json({ message: 'Error al crear el cupón', error: error.message });
    }
  };
  
  exports.obtenerCupones = async (req, res) => {
    try {
      const cupones = await Cupon.find();
      res.status(200).json(cupones);
    } catch (error) {
      console.error("Error al obtener los cupones:", error);
      res.status(500).json({ message: 'Error al obtener los cupones' });
    }
  };

  exports.obtenerCuponPorId = async (req, res) => {
    try {
      const cupon = await Cupon.findById(req.params.id);
      if (!cupon) {
        return res.status(404).json({ message: 'Cupón no encontrado' });
      }
      res.status(200).json(cupon);
    } catch (error) {
      console.error("Error al obtener el cupón:", error);
      res.status(500).json({ message: 'Error al obtener el cupón' });
    }
  };

  exports.actualizarCupon = async (req, res) => {
    try {
      const cuponActualizado = await Cupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cuponActualizado) {
        return res.status(404).json({ message: 'Cupón no encontrado' });
      }
      res.status(200).json(cuponActualizado);
    } catch (error) {
      console.error("Error al actualizar el cupón:", error);
      res.status(500).json({ message: 'Error al actualizar el cupón' });
    }
  };

  exports.eliminarCupon = async (req, res) => {
    try {
      const cuponEliminado = await Cupon.findByIdAndDelete(req.params.id);
      if (!cuponEliminado) {
        return res.status(404).json({ message: 'Cupón no encontrado' });
      }
      res.status(200).json({ message: 'Cupón eliminado correctamente' });
    } catch (error) {
      console.error("Error al eliminar el cupón:", error);
      res.status(500).json({ message: 'Error al eliminar el cupón' });
    }
  };

  