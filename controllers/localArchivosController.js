const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los archivos de locales
exports.getAllLocalArchivos = (req, res) => {
  const query = 'SELECT * FROM Local_Archivos';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los archivos de locales' });
      return;
    }
    res.json(results);
  });
};

// Obtener un archivo de local por ID
exports.getLocalArchivoById = (req, res) => {
  const localArchivosID = req.params.id;
  const query = 'SELECT * FROM Local_Archivos WHERE LocalArchivosID = ?';
  db.query(query, [localArchivosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el archivo de local' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo archivo de local
exports.createLocalArchivo = (req, res) => {
  const { LocalID, Imagen, FechaIng, Activo } = req.body;
  const query = 'INSERT INTO Local_Archivos (LocalID, Imagen, FechaIng, Activo) VALUES (?, ?, ?, ?)';
  db.query(query, [LocalID, Imagen, FechaIng, Activo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el archivo de local' });
      return;
    }
    res.status(201).json({ message: 'Archivo de local creado exitosamente', LocalArchivosID: result.insertId });
  });
};

// Actualizar un archivo de local
exports.updateLocalArchivo = (req, res) => {
  const localArchivosID = req.params.id;
  const { LocalID, Imagen, FechaIng, Activo } = req.body;
  const query = 'UPDATE Local_Archivos SET LocalID = ?, Imagen = ?, FechaIng = ?, Activo = ? WHERE LocalArchivosID = ?';
  db.query(query, [LocalID, Imagen, FechaIng, Activo, localArchivosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el archivo de local' });
      return;
    }
    res.json({ message: 'Archivo de local actualizado exitosamente' });
  });
};

// Eliminar un archivo de local
exports.deleteLocalArchivo = (req, res) => {
  const localArchivosID = req.params.id;
  const query = 'DELETE FROM Local_Archivos WHERE LocalArchivosID = ?';
  db.query(query, [localArchivosID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el archivo de local' });
      return;
    }
    res.json({ message: 'Archivo de local eliminado exitosamente' });
  });
};
