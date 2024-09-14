const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los eventos locales
exports.getAllLocalEventos = (req, res) => {
  const query = 'SELECT * FROM LocalEventos';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los eventos locales' });
      return;
    }
    res.json(results);
  });
};

// Obtener un evento local por ID
exports.getLocalEventoById = (req, res) => {
  const localEventosID = req.params.id;
  const query = 'SELECT * FROM LocalEventos WHERE LocalEventosID = ?';
  db.query(query, [localEventosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el evento local' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo evento local
exports.createLocalEvento = (req, res) => {
  const { LocalID, EventoTipoID, Descrip, direccion, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo } = req.body;
  const query = 'INSERT INTO LocalEventos (LocalID, EventoTipoID, Descrip, direccion, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [LocalID, EventoTipoID, Descrip, direccion, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el evento local' });
      return;
    }
    res.status(201).json({ message: 'Evento local creado exitosamente', LocalEventosID: result.insertId });
  });
};

// Actualizar un evento local
exports.updateLocalEvento = (req, res) => {
  const localEventosID = req.params.id;
  const { LocalID, EventoTipoID, Descrip, direccion, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo } = req.body;
  const query = 'UPDATE LocalEventos SET LocalID = ?, EventoTipoID = ?, Descrip = ?, direccion = ?, imagen = ?, URL = ?, longitud = ?, latitud = ?, FechaIng = ?, ciudadID = ?, Activo = ? WHERE LocalEventosID = ?';
  db.query(query, [LocalID, EventoTipoID, Descrip, direccion, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo, localEventosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el evento local' });
      return;
    }
    res.json({ message: 'Evento local actualizado exitosamente' });
  });
};

// Eliminar un evento local
exports.deleteLocalEvento = (req, res) => {
  const localEventosID = req.params.id;
  const query = 'DELETE FROM LocalEventos WHERE LocalEventosID = ?';
  db.query(query, [localEventosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el evento local' });
      return;
    }
    res.json({ message: 'Evento local eliminado exitosamente' });
  });
};
