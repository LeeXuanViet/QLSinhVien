const KhoaHoc = require('../models/khoaHocModel');

exports.getAllKhoaHoc = (req, res) => {
  KhoaHoc.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.createKhoaHoc = (req, res) => {
  KhoaHoc.create(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(201).json({ message: 'Khóa học được tạo thành công' });
  });
};

exports.updateKhoaHoc = (req, res) => {
  const id = req.params.id;
  KhoaHoc.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Khóa học được cập nhật thành công' });
  });
};

exports.deleteKhoaHoc = (req, res) => {
  const id = req.params.id;
  KhoaHoc.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Khóa học được xóa thành công' });
  });
};
