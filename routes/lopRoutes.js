const express = require('express');
const router = express.Router();
const lopController = require('../controllers/lopController');

router.get('/', lopController.getAllLop);
router.post('/create', lopController.createLop);
router.put('/edit/:id', lopController.updateLop);
router.delete('/delete/:id', lopController.deleteLop);

module.exports = router;
