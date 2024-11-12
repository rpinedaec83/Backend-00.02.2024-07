const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configurar base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conexión a la base de datos
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Configurar Passport con OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, (token, tokenSecret, profile, done) => {
  // Aquí puedes almacenar el perfil del usuario en la base de datos
  return done(null, profile);
}));

// Middleware de Passport
app.use(passport.initialize());

// Rutas de Express
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación!');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Conexión de Socket.io
io.on('connection', socket => {
  console.log('Un usuario se ha conectado');
  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
