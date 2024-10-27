db.usuarios.updateOne(
    { usuario_id: "123abc", "mensajes.mensaje_id": "1" },
    {
      $set: { "mensajes.$.mensaje_texto": "Texto editado", "mensajes.$.editado": true },
      $push: { acciones_historial: { accion: "editar", mensaje_id: "1", fecha_accion: new Date() } }
    }


    
  );
  

  
  db.usuarios.updateOne(
    { usuario_id: "123abc" },
    { $set: { mensajes: [] } }
  );
  