const DiemDanh = require("../models/diemdanh.model");

exports.getAll = (req, res) => {
  DiemDanh.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getByMaSV = (req, res) => {
  const { MaSV } = req.params;
  DiemDanh.getByMaSV(MaSV, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.getByMaLop = (req, res) => {
  const { MaLop } = req.params;
  DiemDanh.getByMaLop(MaLop, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.add = (req, res) => {
  DiemDanh.add(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err.message || err });
    res.json({ message: "Điểm danh thành công", result });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  DiemDanh.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err.message || err });
    res.json({ message: "Cập nhật điểm danh thành công", result });
  });
};

exports.deleteById = (req, res) => {
  const { id } = req.params;
  DiemDanh.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Xóa điểm danh thành công", result });
  });
};
