const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Obtener todos los admins
router.get('/', adminController.getAllAdmins);

// Obtener un admin por ID
router.get('/:id', adminController.getAdminById);

// Crear un nuevo admin
router.post('/', adminController.createAdmin);

// Actualizar un admin
router.put('/:id', adminController.updateAdmin);

// Eliminar un admin
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
