const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los tipos de menú
exports.getAllTipoMenus = (req, res) => {
  const query = 'SELECT * FROM TipoMenu';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los tipos de menú' });
      return;
    }
    res.json(results);
  });
};

// Obtener un tipo de menú por ID
exports.getTipoMenuById = (req, res) => {
  const tipoMenuID = req.params.id;
  const query = 'SELECT * FROM TipoMenu WHERE TipoMenuID = ?';
  db.query(query, [tipoMenuID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el tipo de menú' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo tipo de menú
exports.createTipoMenu = (req, res) => {
  const { TipoMenu } = req.body;
  const query = 'INSERT INTO TipoMenu (TipoMenu) VALUES (?)';
  db.query(query, [TipoMenu], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el tipo de menú' });
      return;
    }
    res.status(201).json({ message: 'Tipo de menú creado exitosamente', TipoMenuID: result.insertId });
  });
};

// Actualizar un tipo de menú
exports.updateTipoMenu = (req, res) => {
  const tipoMenuID = req.params.id;
  const { TipoMenu } = req.body;
  const query = 'UPDATE TipoMenu SET TipoMenu = ? WHERE TipoMenuID = ?';
  db.query(query, [TipoMenu, tipoMenuID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el tipo de menú' });
      return;
    }
    res.json({ message: 'Tipo de menú actualizado exitosamente' });
  });
};

// Eliminar un tipo de menú
exports.deleteTipoMenu = (req, res) => {
  const tipoMenuID = req.params.id;
  const query = 'DELETE FROM TipoMenu WHERE TipoMenuID = ?';
  db.query(query, [tipoMenuID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el tipo de menú' });
      return;
    }
    res.json({ message: 'Tipo de menú eliminado exitosamente' });
  });
};
