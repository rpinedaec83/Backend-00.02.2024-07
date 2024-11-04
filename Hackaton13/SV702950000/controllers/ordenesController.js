exports.crearOrden = async (req, res) => {
    try {
      const nuevaOrden = new Orden(req.body);
      const ordenGuardada = await nuevaOrden.save();
      res.status(201).json(ordenGuardada);
    } catch (error) {
      console.error("Error al crear la orden:", error);
      res.status(500).json({ message: 'Error al crear la orden', error: error.message });
    }
  };
  

  exports.obtenerOrdenes = async (req, res) => {
    try {
      const ordenes = await Orden.find().populate('cursoId');
      res.status(200).json(ordenes);
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
      res.status(500).json({ message: 'Error al obtener las órdenes' });
    }
  };

  
  exports.obtenerOrdenPorId = async (req, res) => {
    try {
      const orden = await Orden.findById(req.params.id).populate('cursoId');
      if (!orden) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
      res.status(200).json(orden);
    } catch (error) {
      console.error("Error al obtener la orden:", error);
      res.status(500).json({ message: 'Error al obtener la orden' });
    }
  };
  
  exports.actualizarOrden = async (req, res) => {
    try {
      const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!ordenActualizada) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
      res.status(200).json(ordenActualizada);
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      res.status(500).json({ message: 'Error al actualizar la orden' });
    }
  };

  exports.eliminarOrden = async (req, res) => {
    try {
      const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
      if (!ordenEliminada) {
        return res.status(404).json({ message: 'Orden no encontrada' });
      }
      res.status(200).json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
      console.error("Error al eliminar la orden:", error);
      res.status(500).json({ message: 'Error al eliminar la orden' });
    }
  };
  