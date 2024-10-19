db.usuarios.updateOne(
  { usuario_id: "123abc" },
  {
    $push: {
      mensajes: {
        mensaje_id: "1",
        mensaje_texto: "Hola, ¿cómo estás?",
        fecha_envio: new Date(),
        editado: false
      }
    }
  }
);
