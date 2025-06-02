const express = require('express');
const router = express.Router();
const khoaHocController = require('../controllers/khoaHocController');

router.get('/', khoaHocController.getAllKhoaHoc);
router.post('/create', khoaHocController.createKhoaHoc);
router.put('/edit/:id', khoaHocController.updateKhoaHoc);
router.delete('/delete/:id', khoaHocController.deleteKhoaHoc);

module.exports = router;
