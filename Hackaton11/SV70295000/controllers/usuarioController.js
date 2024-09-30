// controllers/usuarioController.js
const Usuario = require('../models/usuario');

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ username, password, email });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// Actualizar un usuario
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    usuario.username = username;
    usuario.password = password;
    usuario.email = email;
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
