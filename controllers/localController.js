const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los locales
exports.getAllLocales = (req, res) => {
  const query = 'SELECT * FROM Local';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los locales' });
      return;
    }
    res.json(results);
  });
};

// Obtener un local por ID
exports.getLocalById = (req, res) => {
  const localID = req.params.id;
  const query = 'SELECT * FROM Local WHERE LocalID = ?';
  db.query(query, [localID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el local' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo local
exports.createLocal = (req, res) => {
  const { LocalTipoID, Descrip, direccion, celular, correo, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo } = req.body;
  const query = 'INSERT INTO Local (LocalTipoID, Descrip, direccion, celular, correo, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [LocalTipoID, Descrip, direccion, celular, correo, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el local' });
      return;
    }
    res.status(201).json({ message: 'Local creado exitosamente', LocalID: result.insertId });
  });
};

// Actualizar un local
exports.updateLocal = (req, res) => {
  const localID = req.params.id;
  const { LocalTipoID, Descrip, direccion, celular, correo, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo } = req.body;
  const query = 'UPDATE Local SET LocalTipoID = ?, Descrip = ?, direccion = ?, celular = ?, correo = ?, imagen = ?, URL = ?, longitud = ?, latitud = ?, FechaIng = ?, ciudadID = ?, Activo = ? WHERE LocalID = ?';
  db.query(query, [LocalTipoID, Descrip, direccion, celular, correo, imagen, URL, longitud, latitud, FechaIng, ciudadID, Activo, localID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el local' });
      return;
    }
    res.json({ message: 'Local actualizado exitosamente' });
  });
};

// Eliminar un local
exports.deleteLocal = (req, res) => {
  const localID = req.params.id;
  const query = 'DELETE FROM Local WHERE LocalID = ?';
  db.query(query, [localID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el local' });
      return;
    }
    res.json({ message: 'Local eliminado exitosamente' });
  });
};
