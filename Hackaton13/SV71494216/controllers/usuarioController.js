const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Crear usuario
exports.crearUsuario = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const nuevoUsuario = new Usuario({ username, password: hashedPassword });
  await nuevoUsuario.save();
  res.status(201).json(nuevoUsuario);
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  const usuario = await Usuario.findOne({ username });
  if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET);
  res.json({ token });
};
