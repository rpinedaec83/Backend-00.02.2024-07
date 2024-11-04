const express = require('express');
const session = require('express-session');
const passport = require('./auth'); // Importa la configuración de Passport

const app = express();

// Configuración de sesión
app.use(session({
    secret: process.env.session_secret, // Usa un valor seguro aquí
    resave: false,
    saveUninitialized: true
}));

// Inicializar Passport y sesiones
app.use(passport.initialize());
app.use(passport.session());

// Ruta de inicio de sesión con Google
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Callback de Google (redirecciona aquí luego de autenticarse)
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirige a la página que desees luego de login exitoso
    }
);

// Ruta de logout
app.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Ruta de dashboard protegida
app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Hola ${req.user.nombre}, bienvenido a tu dashboard!`);
    } else {
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
