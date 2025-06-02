const Lop = require('../models/lopModel');

exports.getAllLop = (req, res) => {
  Lop.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.createLop = (req, res) => {
  Lop.create(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(201).json({ message: 'Tạo lớp thành công' });
  });
};

exports.updateLop = (req, res) => {
  const id = req.params.id;
  Lop.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Cập nhật lớp thành công' });
  });
};

exports.deleteLop = (req, res) => {
  const id = req.params.id;
  Lop.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Xóa lớp thành công' });
  });
};
