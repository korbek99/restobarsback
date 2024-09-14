const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los países
exports.getAllPaises = (req, res) => {
  const query = 'SELECT * FROM Pais';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los países' });
      return;
    }
    res.json(results);
  });
};

// Obtener un país por ID
exports.getPaisById = (req, res) => {
  const paisId = req.params.id;
  const query = 'SELECT * FROM Pais WHERE paisID = ?';
  db.query(query, [paisId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el país' });
      return;
    }
    res.json(result[0]);
  });
};

// Crear un nuevo país
exports.createPais = (req, res) => {
  const { nombrePais } = req.body;
  const query = 'INSERT INTO Pais (nombrePais) VALUES (?)';
  db.query(query, [nombrePais], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el país' });
      return;
    }
    res.status(201).json({ message: 'País creado exitosamente', paisID: result.insertId });
  });
};

// Actualizar un país
exports.updatePais = (req, res) => {
  const paisId = req.params.id;
  const { nombrePais } = req.body;
  const query = 'UPDATE Pais SET nombrePais = ? WHERE paisID = ?';
  db.query(query, [nombrePais, paisId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el país' });
      return;
    }
    res.json({ message: 'País actualizado exitosamente' });
  });
};

// Eliminar un país
exports.deletePais = (req, res) => {
  const paisId = req.params.id;
  const query = 'DELETE FROM Pais WHERE paisID = ?';
  db.query(query, [paisId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el país' });
      return;
    }
    res.json({ message: 'País eliminado exitosamente' });
  });
};
