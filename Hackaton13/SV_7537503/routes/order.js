const express = require('express');
const Order = require('../models/order'); // Importar el modelo de orden
const router = express.Router();

// Crear una nueva orden
router.post('/', async (req, res) => {
    const { userId, courseId } = req.body; // Asegúrate de enviar userId y courseId en el cuerpo de la solicitud

    try {
        const newOrder = new Order({
            userId,
            courseId
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todas las órdenes
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('userId courseId'); // Llenar los datos de usuario y curso
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener una orden por ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('userId courseId');
        if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar una orden
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar una orden
router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json({ message: 'Orden eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
