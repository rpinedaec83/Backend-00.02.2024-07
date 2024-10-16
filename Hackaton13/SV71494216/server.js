const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarios');
const cursoRoutes = require('./routes/cursos');
const ordenRoutes = require('./routes/ordenes');
const cuponRoutes = require('./routes/cupones');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.log(err));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/cupones', cuponRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
