const HocPhan = require('../models/hocPhanModel');

// Lấy học phần
const getAllHocPhan = (req, res) => {
  HocPhan.getAll((err, results) => {
    if (err) {
      console.error('Lỗi khi lấy danh sách học phần:', err);
      return res.status(500).json({ error: 'Không thể lấy danh sách học phần.' });
    }
    res.status(200).json(results);
  });
};

// Thêm học phần
const createHocPhan = (req, res) => {
  const { 
    MaHP, 
    TenHP, 
    SoTC, 
    TyLe 
  } = req.body;

  if (!MaHP || !TenHP || !SoTC || !TyLe) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin bắt buộc.' });
  }
  // Kiểm tra 
  if (SoTC <= 0) {
    return res.status(400).json({ error: 'Số tín chỉ phải lớn hơn 0.' });
  }
  if (TyLe < 0 || TyLe > 1) {
    return res.status(400).json({ error: 'Tỷ lệ đánh giá phải từ 0 đến 1.' });
  }

  const hocPhanData = {
    MaHP,
    TenHP,
    SoTC,
    TyLe
  };

  // Gọi hàm tạo học phần trong model
  HocPhan.createHocPhan(hocPhanData, (err, result) => {
    if (err) {
      console.error('Lỗi khi tạo học phần:', err);
      return res.status(500).json({ error: 'Tạo học phần thất bại.' });
    }
    res.status(201).json({ message: 'Tạo học phần thành công!', hocPhanId: result.insertId });
  });
};



// Sửa học phần
const updateHocPhan = (req, res) => {
  const id = req.params.id;
  const { MaHP, TenHP, SoTC, TyLe } = req.body;

  if (!MaHP || !TenHP || !SoTC || !TyLe) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin.' });
  }

  const updatedData = { MaHP, TenHP, SoTC, TyLe };

  HocPhan.updateById(id, updatedData, (err, result) => {
    if (err) {
      console.error('Lỗi khi cập nhật học phần:', err);
      return res.status(500).json({ error: 'Cập nhật thất bại.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Không tìm thấy học phần.' });
    }

    res.status(200).json({ message: 'Cập nhật học phần thành công!' });
  });
};



// Xóa học phần
const deleteHocPhan = (req, res) => {
  const id = req.params.id;

  HocPhan.deleteById(id, (err, result) => {
    if (err) {
      console.error('Lỗi khi xóa học phần:', err);
      return res.status(500).json({ error: 'Xóa học phần thất bại.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Không tìm thấy học phần để xóa.' });
    }

    res.status(200).json({ message: 'Xóa học phần thành công!' });
  });
};

module.exports = {
  createHocPhan,
  getAllHocPhan,
  updateHocPhan,
  deleteHocPhan
};
