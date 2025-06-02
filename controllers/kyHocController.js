const KyHoc = require('../models/kyHocModel');

exports.getAllKyHoc = (req, res) => {
  KyHoc.getAll((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};

exports.createKyHoc = (req, res) => {
  KyHoc.create(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(201).json({ message: 'Kỳ học được tạo thành công' });
  });
};

exports.updateKyHoc = (req, res) => {
  const id = req.params.id;
  KyHoc.update(id, req.body, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Kỳ học được cập nhật thành công' });
  });
};

exports.deleteKyHoc = (req, res) => {
  const id = req.params.id;
  KyHoc.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.json({ message: 'Kỳ học được xóa thành công' });
  });
};
