const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los tipos de eventos
exports.getAllEventoTipos = (req, res) => {
  const query = 'SELECT * FROM EventoTipo';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los tipos de eventos' });
      return;
    }
    res.json(results);
  });
};

// Obtener un tipo de evento por ID
exports.getEventoTipoById = (req, res) => {
  const eventoTipoID = req.params.id;
  const query = 'SELECT * FROM EventoTipo WHERE EventoTipoID = ?';
  db.query(query, [eventoTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el tipo de evento' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo tipo de evento
exports.createEventoTipo = (req, res) => {
  const { EventoTipo } = req.body;
  const query = 'INSERT INTO EventoTipo (EventoTipo) VALUES (?)';
  db.query(query, [EventoTipo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el tipo de evento' });
      return;
    }
    res.status(201).json({ message: 'Tipo de evento creado exitosamente', EventoTipoID: result.insertId });
  });
};

// Actualizar un tipo de evento
exports.updateEventoTipo = (req, res) => {
  const eventoTipoID = req.params.id;
  const { EventoTipo } = req.body;
  const query = 'UPDATE EventoTipo SET EventoTipo = ? WHERE EventoTipoID = ?';
  db.query(query, [EventoTipo, eventoTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el tipo de evento' });
      return;
    }
    res.json({ message: 'Tipo de evento actualizado exitosamente' });
  });
};

// Eliminar un tipo de evento
exports.deleteEventoTipo = (req, res) => {
  const eventoTipoID = req.params.id;
  const query = 'DELETE FROM EventoTipo WHERE EventoTipoID = ?';
  db.query(query, [eventoTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el tipo de evento' });
      return;
    }
    res.json({ message: 'Tipo de evento eliminado exitosamente' });
  });
};
