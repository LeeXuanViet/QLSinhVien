const express = require('express');
const router = express.Router();
const kyHocController = require('../controllers/kyHocController');

router.get('/', kyHocController.getAllKyHoc);
router.post('/create', kyHocController.createKyHoc);
router.put('/edit/:id', kyHocController.updateKyHoc);
router.delete('/delete/:id', kyHocController.deleteKyHoc);

module.exports = router;
