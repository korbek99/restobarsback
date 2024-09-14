const express = require('express');
const router = express.Router();
const localController = require('../controllers/localController');

// Rutas para los locales
router.get('/', localController.getAllLocales);
router.get('/:id', localController.getLocalById);
router.post('/', localController.createLocal);
router.put('/:id', localController.updateLocal);
router.delete('/:id', localController.deleteLocal);

module.exports = router;
