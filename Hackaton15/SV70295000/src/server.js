const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const db = require('./config/database');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configuración de Passport para usar Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    callbackURL: process.env.OAUTH_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Verificar si el usuario ya existe en la base de datos
        const [rows] = await db.execute(
            'SELECT * FROM usuarios WHERE oauth_id = ? AND oauth_provider = ?',
            [profile.id, 'google']
        );

        let user;
        if (rows.length > 0) {
            // Si el usuario existe, lo usamos
            user = rows[0];
        } else {
            // Si no existe, creamos un nuevo usuario
            const [result] = await db.execute(
                'INSERT INTO usuarios (nombre, email, oauth_provider, oauth_id, rol) VALUES (?, ?, ?, ?, ?)',
                [profile.displayName, profile.emails[0].value, 'google', profile.id, 'cliente']
            );
            user = {
                id: result.insertId,
                nombre: profile.displayName,
                email: profile.emails[0].value,
                oauth_provider: 'google',
                oauth_id: profile.id,
                rol: 'cliente'
            };
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

// Serialización y deserialización del usuario
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Rutas de autenticación
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Generar un token JWT
        const token = jwt.sign({ id: req.user.id, email: req.user.email, rol: req.user.rol }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        // Enviar el token al cliente (puedes redirigirlo y adjuntar el token en la URL)
        res.redirect(`/auth/success?token=${token}`);
    }
);

// Ruta de éxito de autenticación para manejar el token en el cliente
app.get('/auth/success', (req, res) => {
    res.send('¡Inicio de sesión exitoso! Puedes usar tu token para acceder a las rutas protegidas.');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

