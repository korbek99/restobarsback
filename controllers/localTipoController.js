const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los tipos de locales
exports.getAllLocalTipos = (req, res) => {
  const query = 'SELECT * FROM LocalTipo';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los tipos de locales' });
      return;
    }
    res.json(results);
  });
};

// Obtener un tipo de local por ID
exports.getLocalTipoById = (req, res) => {
  const localTipoID = req.params.id;
  const query = 'SELECT * FROM LocalTipo WHERE LocalTipoID = ?';
  db.query(query, [localTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el tipo de local' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo tipo de local
exports.createLocalTipo = (req, res) => {
  const { LocalTipo } = req.body;
  const query = 'INSERT INTO LocalTipo (LocalTipo) VALUES (?)';
  db.query(query, [LocalTipo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el tipo de local' });
      return;
    }
    res.status(201).json({ message: 'Tipo de local creado exitosamente', LocalTipoID: result.insertId });
  });
};

// Actualizar un tipo de local
exports.updateLocalTipo = (req, res) => {
  const localTipoID = req.params.id;
  const { LocalTipo } = req.body;
  const query = 'UPDATE LocalTipo SET LocalTipo = ? WHERE LocalTipoID = ?';
  db.query(query, [LocalTipo, localTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el tipo de local' });
      return;
    }
    res.json({ message: 'Tipo de local actualizado exitosamente' });
  });
};

// Eliminar un tipo de local
exports.deleteLocalTipo = (req, res) => {
  const localTipoID = req.params.id;
  const query = 'DELETE FROM LocalTipo WHERE LocalTipoID = ?';
  db.query(query, [localTipoID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el tipo de local' });
      return;
    }
    res.json({ message: 'Tipo de local eliminado exitosamente' });
  });
};
