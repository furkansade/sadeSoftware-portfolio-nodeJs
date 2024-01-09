const express = require('express');
const skillController = require('../../controllers/admin/skillController');

const router = express.Router();

router.route('/').post(skillController.createSkill);
router.route('/:id').delete(skillController.deleteSkill);

module.exports = router;