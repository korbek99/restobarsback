const express = require('express');
const router = express.Router();
const tipoAdminController = require('../controllers/tipoAdminController');

// Rutas para tipos de admin
router.get('/', tipoAdminController.getAllTipoAdmins);
router.get('/:id', tipoAdminController.getTipoAdminById);
router.post('/', tipoAdminController.createTipoAdmin);
router.put('/:id', tipoAdminController.updateTipoAdmin);
router.delete('/:id', tipoAdminController.deleteTipoAdmin);

module.exports = router;
