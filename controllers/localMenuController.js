const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los menús de locales
exports.getAllLocalMenus = (req, res) => {
  const query = 'SELECT * FROM Local_Menu';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los menús de locales' });
      return;
    }
    res.json(results);
  });
};

// Obtener un menú de local por ID
exports.getLocalMenuById = (req, res) => {
  const localMenuId = req.params.id;
  const query = 'SELECT * FROM Local_Menu WHERE LocalMenuiID = ?';
  db.query(query, [localMenuId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el menú de local' });
      return;
    }
    res.json(result[0]);
  });
};

// Obtener un menú de local por LocalID
exports.getLocalMenuByLocalId = (req, res) => {
  const LocalID = req.params.id;
  const query = 'SELECT * FROM Local_Menu WHERE LocalID = ?';
  db.query(query, [LocalID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el menú de local' });
      return;
    }
    res.json(result);
  });
};

// Crear un nuevo menú de local
exports.createLocalMenu = (req, res) => {
  const { LocalID, Imagen, TipoMenuID, FechaIng, Activo, Descrip, precio } = req.body;
  const query = 'INSERT INTO Local_Menu (LocalID, Imagen, TipoMenuID, FechaIng, Activo, Descrip, precio) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [LocalID, Imagen, TipoMenuID, FechaIng, Activo, Descrip, precio], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el menú de local' });
      return;
    }
    res.status(201).json({ message: 'Menú de local creado exitosamente', LocalMenuiID: result.insertId });
  });
};

// Actualizar un menú de local
exports.updateLocalMenu = (req, res) => {
  const localMenuId = req.params.id;
  const { LocalID, Imagen, TipoMenuID, FechaIng, Activo, Descrip, precio } = req.body;
  const query = 'UPDATE Local_Menu SET LocalID = ?, Imagen = ?, TipoMenuID = ?, FechaIng = ?, Activo = ?, Descrip = ?, precio = ? WHERE LocalMenuiID = ?';
  db.query(query, [LocalID, Imagen, TipoMenuID, FechaIng, Activo, Descrip, precio, localMenuId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el menú de local' });
      return;
    }
    res.json({ message: 'Menú de local actualizado exitosamente' });
  });
};

// Eliminar un menú de local
exports.deleteLocalMenu = (req, res) => {
  const localMenuId = req.params.id;
  const query = 'DELETE FROM Local_Menu WHERE LocalMenuiID = ?';
  db.query(query, [localMenuId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el menú de local' });
      return;
    }
    res.json({ message: 'Menú de local eliminado exitosamente' });
  });
};
