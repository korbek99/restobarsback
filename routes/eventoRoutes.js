const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Rutas para los tipos de eventos
router.get('/', eventoController.getAllEventoTipos);
router.get('/:id', eventoController.getEventoTipoById);
router.post('/', eventoController.createEventoTipo);
router.put('/:id', eventoController.updateEventoTipo);
router.delete('/:id', eventoController.deleteEventoTipo);

module.exports = router;
