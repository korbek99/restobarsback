const db = require('../db');  // Importa la conexión a la base de datos

// Obtener todos los usuarios
exports.getAllUsuarios = (req, res) => {
  const query = 'SELECT * FROM Usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
      return;
    }
    res.json(results);
  });
};

// Obtener un usuario por ID
exports.getUsuarioById = (req, res) => {
  const usuarioID = req.params.id;
  const query = 'SELECT * FROM Usuarios WHERE usuariosID = ?';
  db.query(query, [usuarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el usuario' });
      return;
    }
    res.json(result[0]);
  });
};

// Obtener un usuario por nombre de usuario y contraseña
exports.getLoginUsuario = (req, res) => {
  const { usuario, password } = req.body;
  if (!usuario || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
  }

  const query = 'SELECT usuariosID,nombre,appellido,Activo,isAdmin FROM Usuarios WHERE usuario = ? AND password = ?';
  
  db.query(query, [usuario, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener el usuario' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
      return;
    }

    res.json(results[0]);
  });
};


// Crear un nuevo usuario
exports.createUsuario = (req, res) => {
  const { nombre, appellido, direccion, celular, correo, usuario, password, ciudadID, FechaIng, Activo, isAdmin } = req.body;
  const query = 'INSERT INTO Usuarios (nombre, appellido, direccion, celular, correo, usuario, password, ciudadID, FechaIng, Activo, isAdmin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nombre, appellido, direccion, celular, correo, usuario, password, ciudadID, FechaIng, Activo, isAdmin], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el usuario' });
      return;
    }
    res.status(201).json({ message: 'Usuario creado exitosamente', usuariosID: result.insertId });
  });
};

// Actualizar un usuario
exports.updateUsuario = (req, res) => {
  const usuarioID = req.params.id;
  const { nombre, appellido, direccion, celular, correo, usuario, password, ciudadID, FechaIng, Activo, isAdmin } = req.body;
  const query = 'UPDATE Usuarios SET nombre = ?, appellido = ?, direccion = ?, celular = ?, correo = ?, usuario = ?, password = ?, ciudadID = ?, FechaIng = ?, Activo = ?, isAdmin = ? WHERE usuariosID = ?';
  db.query(query, [nombre, appellido, direccion, celular, correo, usuario, password, ciudadID, FechaIng, Activo, isAdmin, usuarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
      return;
    }
    res.json({ message: 'Usuario actualizado exitosamente' });
  });
};

// Eliminar un usuario
exports.deleteUsuario = (req, res) => {
  const usuarioID = req.params.id;
  const query = 'DELETE FROM Usuarios WHERE usuariosID = ?';
  db.query(query, [usuarioID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al eliminar el usuario' });
      return;
    }
    res.json({ message: 'Usuario eliminado exitosamente' });
  });
};
