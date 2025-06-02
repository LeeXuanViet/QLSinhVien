const express = require("express");
const router = express.Router();
const controller = require("../controllers/diemdanh.controller");

router.get("/", controller.getAll);
router.get("/sinhvien/:MaSV", controller.getByMaSV);
router.get("/lop/:MaLop", controller.getByMaLop);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteById); 

module.exports = router;
