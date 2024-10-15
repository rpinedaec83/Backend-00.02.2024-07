// models/coupon.js
const mongoose = require('mongoose');

// Definir el esquema del cupón
const CouponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Coupon = mongoose.model('Coupon', CouponSchema);

module.exports = Coupon;
