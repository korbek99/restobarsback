const express = require('express');
const cors = require('cors');
const db = require('./db');  // Importa la conexión a la base de datos
const adminRoutes = require('./routes/adminRoutes');  // Importa las rutas de Admins

const ciudadRoutes = require('./routes/ciudadRoutes');  // Importa las rutas de Ciudad
const comentariosRoutes = require('./routes/comentariosRoutes');  // Importa las rutas de Comentarios
const eventoRoutes = require('./routes/eventoRoutes');  // Importa las rutas de EventoTipo
const localRoutes = require('./routes/localRoutes'); 
// Importa las rutas de Local
const localEventoRoutes = require('./routes/localEventoRoutes');
const localTipoRoutes = require('./routes/localTipoRoutes');
const localArchivosRoutes = require('./routes/localArchivosRoutes');  // Importa las rutas de Local_Archivos

const localMenuRoutes = require('./routes/localMenuRoutes');  // Importa las rutas de Local_Menu
const paisRoutes = require('./routes/paisRoutes');  // Importa las rutas de País
const tipoAdminRoutes = require('./routes/tipoAdminRoutes');
const tipoMenuRoutes = require('./routes/tipoMenuRoutes');  // Importa las rutas de TipoMenu
const usuarioRoutes = require('./routes/usuarioRoutes');  // Importa las rutas de Usuarios


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Usar rutas de Admins
app.use('/admins', adminRoutes);

// Usar rutas de Ciudad
app.use('/ciudades', ciudadRoutes);  

// Usar rutas de Comentarios
app.use('/comentarios', comentariosRoutes);  

// Usar rutas de EventoTipo
app.use('/eventos', eventoRoutes); 

// Usar rutas de Local
app.use('/locales', localRoutes);

// Usar rutas de LocalEventos
app.use('/local-eventos', localEventoRoutes);

// Usar rutas de LocalTipo
app.use('/local-tipos', localTipoRoutes);

// Usar rutas de Local_Archivos
app.use('/local-archivos', localArchivosRoutes);  

// Usar rutas de Local_Menu
app.use('/local-menus', localMenuRoutes);  

// Usar rutas de País
app.use('/paises', paisRoutes);

// Usar rutas de TipoAdmins
app.use('/tipo-admins', tipoAdminRoutes);

// Usar rutas de TipoMenu
app.use('/tipo-menus', tipoMenuRoutes);

// Usar rutas de Usuarios
app.use('/usuarios', usuarioRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
