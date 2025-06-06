const User = require('../models/userModel');
const db = require('../config/db');

// Hàm kiểm tra MaKH có tồn tại trong bảng KhoaHoc
const checkKhoaHocExists = (MaKH, callback) => {
  const sql = 'SELECT MaKH FROM KhoaHoc WHERE MaKH = ?';
  db.query(sql, [MaKH], (err, results) => {
    if (err) return callback(err, false);
    return callback(null, results.length > 0);
  });
};

// Controller tạo tài khoản người dùng
const createUser = (req, res) => {
  const {
    Name, 
    DateOfBirth, 
    Role, 
    Status, 
    MaSV,
    MaGV, 
    Gender, 
    Hometown, 
    PhoneNumber, 
    Email,
    GPA, 
    DRL, 
    Credit, 
    Tuition, 
    ParentPhoneNumber,
    Username, 
    Password, 
    MaKH
  } = req.body;

  // Kiểm tra các trường bắt buộc
  if (!Name || !DateOfBirth || !Role || !Status || !Gender || !Hometown || !PhoneNumber || !Email || !Username || !Password) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin bắt buộc.' });
  }

  // Kiểm tra MaKH nếu được truyền vào
  if (MaKH) {
    checkKhoaHocExists(MaKH, (err, exists) => {
      if (err) {
        console.error('Lỗi kiểm tra khóa học:', err);
        return res.status(500).json({ error: 'Lỗi kiểm tra khóa học.' });
      }

      if (!exists) {
        return res.status(400).json({ error: 'Khóa học không tồn tại.' });
      }

      insertUser(); 
    });
  } else {
    insertUser(); // Nếu không truyền MaKH vẫn cho chèn (NULL)
  }

  function insertUser() {
    const userData = {
      Name, DateOfBirth, Role, Status, MaSV,
      MaGV, Gender, Hometown, PhoneNumber, Email,
      GPA, DRL, Credit, Tuition, ParentPhoneNumber,
      Username, Password, MaKH
    };

    User.createUser(userData, (err, result) => {
      if (err) {
        console.error('Lỗi khi tạo user:', err);
        return res.status(500).json({ error: 'Tạo người dùng thất bại.' });
      }
      res.status(201).json({ message: 'Tạo người dùng thành công!', userId: result.insertId });
    });
  }
};


// Cập nhật người dùng
const updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  User.updateUser(userId, updatedData, (err, result) => {
    if (err) {
      console.error('Lỗi khi cập nhật người dùng:', err);
      return res.status(500).json({ error: 'Cập nhật người dùng thất bại.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Không tìm thấy người dùng.' });
    }

    res.status(200).json({ message: 'Cập nhật người dùng thành công!' });
  });
};



// Lấy danh sách người dùng
const getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      console.error('Lỗi khi lấy danh sách người dùng:', err);
      return res.status(500).json({ error: 'Không thể lấy danh sách người dùng.' });
    }
    res.status(200).json(results);
  });
};


// Xóa người dùng
const deleteUser = (req, res) => {
  const userId = req.params.id;

  User.deleteUser(userId, (err, result) => {
    if (err) {
      console.error('Lỗi khi xóa người dùng:', err);
      return res.status(500).json({ error: 'Xóa người dùng thất bại.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Không tìm thấy người dùng để xóa.' });
    }

    res.status(200).json({ message: 'Xóa người dùng thành công!' });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};
