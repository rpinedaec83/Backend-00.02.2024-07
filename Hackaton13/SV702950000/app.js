const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CursosRoutes = require('./routes/cursos');
const connectDB = require('./config/database');
const pagosRoutes = require('./routes/pagos');
const ordenesRoutes = require('./routes/ordenes');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api/cursos', CursosRoutes);
app.use('/api', ordenesRoutes);
app.use('/api', ordenesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto "${PORT}"`));
