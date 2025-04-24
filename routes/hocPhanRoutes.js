const express = require('express');
const router = express.Router();
const hocPhanController = require('../controllers/hocPhanController');

router.get('/', hocPhanController.getAllHocPhan);
router.post('/add', hocPhanController.createHocPhan);
router.put('/edit/:id', hocPhanController.updateHocPhan);
router.delete('/delete/:id', hocPhanController.deleteHocPhan);

module.exports = router;
