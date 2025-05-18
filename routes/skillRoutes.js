const express = require('express');
const router = express.Router();
const skillController = require('../controllers/SkillController');
const verifyToken = require('../middleware/authMiddleware');

// PUBLIC - accessible to everyone
router.get('/', skillController.getSkills);

// ADMIN only - protected
router.post('/', verifyToken, skillController.createSkill);
router.put('/:id', verifyToken, skillController.updateSkill);
router.delete('/:id', verifyToken, skillController.deleteSkill);

module.exports = router;