const express = require("express");
const router = express.Router();
const controller = require("../controllers/lop_giaovien.controller");

router.get("/", controller.getAll);
router.get("/:MaLop", controller.getByMaLop);
router.get("/giaovien/:MaGV", controller.getLopByMaGV);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
