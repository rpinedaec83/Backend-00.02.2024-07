const mongoose = require('mongoose');

// Definir el esquema de la orden de compra
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de usuario
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Referencia al modelo de curso
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'], // Estado de la orden
        default: 'Pending'
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
