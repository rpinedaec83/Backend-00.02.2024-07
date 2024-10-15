// routes/coupon.js
const express = require('express');
const Coupon = require('../models/coupon'); // Asegúrate de la ruta correcta
const router = express.Router();

// Crear un nuevo cupón
router.post('/', async (req, res) => {
    try {
        const { code, discount, expirationDate } = req.body;
        const coupon = new Coupon({ code, discount, expirationDate });
        await coupon.save();
        res.status(201).json(coupon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los cupones
router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un cupón por ID
router.get('/:id', async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);
        if (!coupon) return res.status(404).json({ message: 'Cupón no encontrado' });
        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un cupón
router.put('/:id', async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!coupon) return res.status(404).json({ message: 'Cupón no encontrado' });
        res.json(coupon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un cupón
router.delete('/:id', async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndDelete(req.params.id);
        if (!coupon) return res.status(404).json({ message: 'Cupón no encontrado' });
        res.json({ message: 'Cupón eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
