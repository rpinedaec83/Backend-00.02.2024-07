const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Rutas de autenticación
const orderRoutes = require('./routes/order'); // Rutas de órdenes de compra
const paymentRoutes = require('./routes/payment'); // Rutas de pagos simulados
const courseRoutes = require('./routes/course'); // Rutas de cursos
const couponRoutes = require('./routes/coupon'); // Rutas de cupones de descuento

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para manejar JSON

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB conectado');
}).catch((err) => {
    console.log('Error al conectar MongoDB:', err);
});

// Conectar rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación
app.use('/api/orders', orderRoutes); // Rutas de órdenes de compra
app.use('/api/payments', paymentRoutes); // Rutas de pagos simulados
app.use('/api/courses', courseRoutes); // Rutas de cursos
app.use('/api/coupons', couponRoutes); // Rutas de cupones de descuento

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API corriendo...');
});

// Configurar el puerto y levantar el servidor
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
