const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los tipos de admin
exports.getAllTipoAdmins = (req, res) => {
  const query = 'SELECT * FROM TipoAdmins';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los tipos de admin' });
      return;
    }
    res.json(results);
  });
};

// Obtener un tipo de admin por ID
exports.getTipoAdminById = (req, res) => {
  const tipoAdminID = req.params.id;
  const query = 'SELECT * FROM TipoAdmins WHERE tipoAdminID = ?';
  db.query(query, [tipoAdminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el tipo de admin' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo tipo de admin
exports.createTipoAdmin = (req, res) => {
  const { tipoAdmin } = req.body;
  const query = 'INSERT INTO TipoAdmins (tipoAdmin) VALUES (?)';
  db.query(query, [tipoAdmin], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el tipo de admin' });
      return;
    }
    res.status(201).json({ message: 'Tipo de admin creado exitosamente', tipoAdminID: result.insertId });
  });
};

// Actualizar un tipo de admin
exports.updateTipoAdmin = (req, res) => {
  const tipoAdminID = req.params.id;
  const { tipoAdmin } = req.body;
  const query = 'UPDATE TipoAdmins SET tipoAdmin = ? WHERE tipoAdminID = ?';
  db.query(query, [tipoAdmin, tipoAdminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el tipo de admin' });
      return;
    }
    res.json({ message: 'Tipo de admin actualizado exitosamente' });
  });
};

// Eliminar un tipo de admin
exports.deleteTipoAdmin = (req, res) => {
  const tipoAdminID = req.params.id;
  const query = 'DELETE FROM TipoAdmins WHERE tipoAdminID = ?';
  db.query(query, [tipoAdminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el tipo de admin' });
      return;
    }
    res.json({ message: 'Tipo de admin eliminado exitosamente' });
  });
};
