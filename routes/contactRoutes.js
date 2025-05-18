const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const verifyToken = require('../middleware/authMiddleware');

// Public
router.post('/', contactController.createContact);

// Protected
router.get('/', verifyToken, contactController.getContacts);
router.delete('/:id', verifyToken, contactController.deleteContact);

module.exports = router;