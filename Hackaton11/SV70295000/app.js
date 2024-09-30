const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Configuración de Sequelize

// Importar rutas
const especieRoutes = require('./routes/especieRoutes');
const razaRoutes = require('./routes/razaRoutes');
const colorRoutes = require('./routes/colorRoutes');
const sexoRoutes = require('./routes/sexoRoutes');
const nacionalidadRoutes = require('./routes/nacionalidadRoutes');
const vacunaRoutes = require('./routes/vacunaRoutes');
const propietarioRoutes = require('./routes/propietarioRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const mascotaVacunaRoutes = require('./routes/mascotaVacunaRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // Para parsear JSON en las solicitudes

// Rutas
app.use('/api/especies', especieRoutes);
app.use('/api/razas', razaRoutes);
app.use('/api/colores', colorRoutes);
app.use('/api/sexo', sexoRoutes);
app.use('/api/nacionalidades', nacionalidadRoutes);
app.use('/api/vacunas', vacunaRoutes);
app.use('/api/propietarios', propietarioRoutes);
app.use('/api/mascotas', mascotaRoutes);
app.use('/api/mascota-vacunas', mascotaVacunaRoutes); // Integración de MascotaVacuna

// Sincronizar la base de datos y levantar el servidor
sequelize.sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });
