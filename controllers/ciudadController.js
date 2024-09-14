const db = require('../db');  // Importa la conexión a la base de datos


exports.getAllCiudades = (req, res) => {
  const query = 'SELECT * FROM Ciudad';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener las ciudades' });
      return;
    }
    res.json(results);
  });
};

exports.getCiudadById = (req, res) => {
  const ciudadID = req.params.id;
  const query = 'SELECT * FROM Ciudad WHERE ciudadID = ?';
  db.query(query, [ciudadID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener la ciudad' });
      return;
    }
    res.json(result[0]);
  });
};


exports.createCiudad = (req, res) => {
  const { nombreCiudad, paisID } = req.body;
  const query = 'INSERT INTO Ciudad (nombreCiudad, paisID) VALUES (?, ?)';
  db.query(query, [nombreCiudad, paisID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear la ciudad' });
      return;
    }
    res.status(201).json({ message: 'Ciudad creada exitosamente', ciudadID: result.insertId });
  });
};


exports.updateCiudad = (req, res) => {
  const ciudadID = req.params.id;
  const { nombreCiudad, paisID } = req.body;
  const query = 'UPDATE Ciudad SET nombreCiudad = ?, paisID = ? WHERE ciudadID = ?';
  db.query(query, [nombreCiudad, paisID, ciudadID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar la ciudad' });
      return;
    }
    res.json({ message: 'Ciudad actualizada exitosamente' });
  });
};


exports.deleteCiudad = (req, res) => {
  const ciudadID = req.params.id;
  const query = 'DELETE FROM Ciudad WHERE ciudadID = ?';
  db.query(query, [ciudadID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar la ciudad' });
      return;
    }
    res.json({ message: 'Ciudad eliminada exitosamente' });
  });
};
