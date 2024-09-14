const express = require('express');
const router = express.Router();
const localArchivosController = require('../controllers/localArchivosController');

// Rutas para archivos de locales
router.get('/', localArchivosController.getAllLocalArchivos);
router.get('/:id', localArchivosController.getLocalArchivoById);
router.post('/', localArchivosController.createLocalArchivo);
router.put('/:id', localArchivosController.updateLocalArchivo);
router.delete('/:id', localArchivosController.deleteLocalArchivo);

module.exports = router;
