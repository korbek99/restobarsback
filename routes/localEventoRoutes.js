const express = require('express');
const router = express.Router();
const localEventoController = require('../controllers/localEventoController');

// Rutas para eventos locales
router.get('/', localEventoController.getAllLocalEventos);
router.get('/:id', localEventoController.getLocalEventoById);
router.post('/', localEventoController.createLocalEvento);
router.put('/:id', localEventoController.updateLocalEvento);
router.delete('/:id', localEventoController.deleteLocalEvento);

module.exports = router;
