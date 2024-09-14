const db = require('../db');  // Importa la conexión a la base de datos

exports.getAllAdmins = (req, res) => {
  const query = 'SELECT * FROM Admins';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los admins' });
      return;
    }
    res.json(results);
  });
};

exports.getAdminById = (req, res) => {
  const adminID = req.params.id;
  const query = 'SELECT * FROM Admins WHERE adminID = ?';
  db.query(query, [adminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el admin' });
      return;
    }
    res.json(result[0]);
  });
};

exports.createAdmin = (req, res) => {
  const { nombre, apellido, direccion, celular, correo, ciudadID, usuario, password, tipoAdminID, FechaIng, Activo } = req.body;
  const query = 'INSERT INTO Admins (nombre, appellido, direccion, celular, correo, ciudadID, usuario, password, tipoAdminID, FechaIng, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nombre, apellido, direccion, celular, correo, ciudadID, usuario, password, tipoAdminID, FechaIng, Activo], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el admin' });
      return;
    }
    res.status(201).json({ message: 'Admin creado exitosamente', adminID: result.insertId });
  });
};

exports.updateAdmin = (req, res) => {
  const adminID = req.params.id;
  const { nombre, apellido, direccion, celular, correo, ciudadID, usuario, password, tipoAdminID, FechaIng, Activo } = req.body;
  const query = 'UPDATE Admins SET nombre = ?, appellido = ?, direccion = ?, celular = ?, correo = ?, ciudadID = ?, usuario = ?, password = ?, tipoAdminID = ?, FechaIng = ?, Activo = ? WHERE adminID = ?';
  db.query(query, [nombre, apellido, direccion, celular, correo, ciudadID, usuario, password, tipoAdminID, FechaIng, Activo, adminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el admin' });
      return;
    }
    res.json({ message: 'Admin actualizado exitosamente' });
  });
};

exports.deleteAdmin = (req, res) => {
  const adminID = req.params.id;
  const query = 'DELETE FROM Admins WHERE adminID = ?';
  db.query(query, [adminID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el admin' });
      return;
    }
    res.json({ message: 'Admin eliminado exitosamente' });
  });
};
