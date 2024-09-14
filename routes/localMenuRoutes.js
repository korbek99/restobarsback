const express = require('express');
const router = express.Router();
const localMenuController = require('../controllers/localMenuController');

// Rutas para menús de locales
router.get('/', localMenuController.getAllLocalMenus);
router.get('/:id', localMenuController.getLocalMenuById);
router.get('/local/:id', localMenuController.getLocalMenuByLocalId);
router.post('/', localMenuController.createLocalMenu);
router.put('/:id', localMenuController.updateLocalMenu);
router.delete('/:id', localMenuController.deleteLocalMenu);

module.exports = router;
