const express = require('express');
const router = express.Router();
const tipoMenuController = require('../controllers/tipoMenuController');

// Rutas para tipos de menú
router.get('/', tipoMenuController.getAllTipoMenus);
router.get('/:id', tipoMenuController.getTipoMenuById);
router.post('/', tipoMenuController.createTipoMenu);
router.put('/:id', tipoMenuController.updateTipoMenu);
router.delete('/:id', tipoMenuController.deleteTipoMenu);

module.exports = router;
