const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware para verificar el token JWT
exports.verificarToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token no proporcionado' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token no válido' });
        }
        req.user = decoded;
        next();
    });
};
