const LopSinhVien = require("../models/lop_sinhvien.model");

exports.getAll = (req, res) => {
  LopSinhVien.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getByMaLop = (req, res) => {
  const { MaLop } = req.params;
  LopSinhVien.getByMaLop(MaLop, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getLopByMaSV = (req, res) => {
  const { MaSV } = req.params;
  LopSinhVien.getLopByMaSV(MaSV, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.add = (req, res) => {
  LopSinhVien.add(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err.message || err });
    res.json({ message: "Thêm sinh viên vào lớp thành công", result });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  LopSinhVien.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Cập nhật điểm thành công", result });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  LopSinhVien.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: "Xóa sinh viên khỏi lớp thành công", result });
  });
};
