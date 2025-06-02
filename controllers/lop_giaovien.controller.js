const LopGiaoVien = require("../models/lop_giaovien.model");

exports.getAll = (req, res) => {
  LopGiaoVien.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getByMaLop = (req, res) => {
  const { MaLop } = req.params;
  LopGiaoVien.getByMaLop(MaLop, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getLopByMaGV = (req, res) => {
  const { MaGV } = req.params;
  LopGiaoVien.getLopByMaGV(MaGV, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.add = (req, res) => {
  LopGiaoVien.add(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err.message || err });
    res.json({ message: "Gán giáo viên vào lớp thành công", result });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  LopGiaoVien.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Cập nhật thông tin giảng dạy thành công", result });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  LopGiaoVien.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Xóa giáo viên khỏi lớp thành công", result });
  });
};
