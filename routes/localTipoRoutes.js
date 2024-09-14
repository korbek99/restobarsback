const express = require('express');
const router = express.Router();
const localTipoController = require('../controllers/localTipoController');

// Rutas para tipos de locales
router.get('/', localTipoController.getAllLocalTipos);
router.get('/:id', localTipoController.getLocalTipoById);
router.post('/', localTipoController.createLocalTipo);
router.put('/:id', localTipoController.updateLocalTipo);
router.delete('/:id', localTipoController.deleteLocalTipo);

module.exports = router;
