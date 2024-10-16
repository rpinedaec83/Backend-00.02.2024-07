const express = require('express');
const app = express();

// Importar las rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const vacunaRoutes = require('./routes/vacunaRoutes');
const especieRoutes = require('./routes/especieRoutes');
const razaRoutes = require('./routes/razaRoutes');
const colorRoutes = require('./routes/colorRoutes');
const sexoRoutes = require('./routes/sexoRoutes');
const nacionalidadRoutes = require('./routes/nacionalidadRoutes');
const ubigeoRoutes = require('./routes/ubigeoRoutes');
const propietarioRoutes = require('./routes/propietarioRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const mascotaVacunaRoutes = require('./routes/mascotaVacunaRoutes');

// Middleware para poder leer JSON en las solicitudes
app.use(express.json());

// Definir las rutas base para cada recurso
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/vacunas', vacunaRoutes);
app.use('/api/especies', especieRoutes);
app.use('/api/razas', razaRoutes);
app.use('/api/colores', colorRoutes);
app.use('/api/sexos', sexoRoutes);
app.use('/api/nacionalidades', nacionalidadRoutes);
app.use('/api/ubigeos', ubigeoRoutes);
app.use('/api/propietarios', propietarioRoutes);
app.use('/api/mascotas', mascotaRoutes);
app.use('/api/mascota-vacunas', mascotaVacunaRoutes);

// Puerto en el cual el servidor estará escuchando
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
