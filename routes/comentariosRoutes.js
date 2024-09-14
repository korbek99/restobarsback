const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

// Rutas para los comentarios
router.get('/', comentariosController.getAllComentarios);
router.get('/:id', comentariosController.getComentarioById);
router.get('/local/:id', comentariosController.getComentarioByLocalId);
router.post('/', comentariosController.createComentario);
router.put('/:id', comentariosController.updateComentario);
router.delete('/:id', comentariosController.deleteComentario);

module.exports = router;
