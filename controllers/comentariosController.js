const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los comentarios
exports.getAllComentarios = (req, res) => {
  const query = 'SELECT * FROM ComentariosLocal';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los comentarios' });
      return;
    }
    res.json(results);
  });
};

// Obtener un comentario por ID
exports.getComentarioById = (req, res) => {
  const comentarioID = req.params.id;
  const query = 'SELECT * FROM ComentariosLocal WHERE ComentariosLocalID = ?';
  db.query(query, [comentarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el comentario' });
      return;
    }
    res.json(result[0]);
  });
};

// Obtener un comentario por LocalID
exports.getComentarioByLocalId = (req, res) => {
  const LocalID = req.params.id;
  const query = 'SELECT * FROM ComentariosLocal WHERE LocalID = ?';
  db.query(query, [LocalID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el comentario' });
      return;
    }
    res.json(result);
  });
};

// Crear un nuevo comentario
exports.createComentario = (req, res) => {
  const { LocalID, usuariosID, titulo, Descrip, calificacion, FechaIng, Activo } = req.body;
  const query = 'INSERT INTO ComentariosLocal (LocalID, usuariosID, titulo, Descrip, calificacion, FechaIng, Activo) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [LocalID, usuariosID, titulo, Descrip, calificacion, FechaIng, Activo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el comentario' });
      return;
    }
    res.status(201).json({ message: 'Comentario creado exitosamente', ComentariosLocalID: result.insertId });
  });
};

// Actualizar un comentario
exports.updateComentario = (req, res) => {
  const comentarioID = req.params.id;
  const { LocalID, usuariosID, titulo, Descrip, calificacion, FechaIng, Activo } = req.body;
  const query = 'UPDATE ComentariosLocal SET LocalID = ?, usuariosID = ?, titulo = ?, Descrip = ?, calificacion = ?, FechaIng = ?, Activo = ? WHERE ComentariosLocalID = ?';
  db.query(query, [LocalID, usuariosID, titulo, Descrip, calificacion, FechaIng, Activo, comentarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el comentario' });
      return;
    }
    res.json({ message: 'Comentario actualizado exitosamente' });
  });
};

// Eliminar un comentario
exports.deleteComentario = (req, res) => {
  const comentarioID = req.params.id;
  const query = 'DELETE FROM ComentariosLocal WHERE ComentariosLocalID = ?';
  db.query(query, [comentarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el comentario' });
      return;
    }
    res.json({ message: 'Comentario eliminado exitosamente' });
  });
};
