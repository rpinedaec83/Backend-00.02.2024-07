const jwt = require('jsonwebtoken');

exports.autenticacion = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token es requerido');
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Token inválido');
    req.usuarioId = decoded.id;
    next();
  });
};
