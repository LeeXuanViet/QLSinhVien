const db = require("../config/db");

const LopSinhVien = {
  getAll: (callback) => {
    const sql = `
      SELECT lsv.*, u.Name AS TenSV, l.TenLop
      FROM Lop_SinhVien lsv
      JOIN Users u ON lsv.MaSV = u.MaSV
      JOIN Lop l ON lsv.MaLop = l.MaLop
    `;
    db.query(sql, callback);
  },
  
  getLopByMaSV: (MaSV, callback) => {
    const sql = `
      SELECT l.MaLop, l.TenLop, l.MaHP, l.TenKyHoc, l.DiaDiem, l.ThoiGian
      FROM Lop_SinhVien lsv
      JOIN Lop l ON lsv.MaLop = l.MaLop
      WHERE lsv.MaSV = ?
    `;
    db.query(sql, [MaSV], callback);
  },

  getByMaLop: (MaLop, callback) => {
    const sql = `
      SELECT lsv.*, u.Name AS TenSV
      FROM Lop_SinhVien lsv
      JOIN Users u ON lsv.MaSV = u.MaSV
      WHERE lsv.MaLop = ?
    `;
    db.query(sql, [MaLop], callback);
  },

  add: (data, callback) => {
    const sqlCheck = `
      SELECT * FROM Lop WHERE MaLop = ?;
      SELECT * FROM Users WHERE MaSV = ? AND Role = 2;
    `;
    db.query(sqlCheck, [data.MaLop, data.MaSV], (err, results) => {
      if (err) return callback(err);

      if (results[0].length === 0) return callback({ message: "MaLop không tồn tại" });
      if (results[1].length === 0) return callback({ message: "MaSV không hợp lệ" });

      const insertSql = `
        INSERT INTO Lop_SinhVien (MaLop, MaSV, QT, CK)
        VALUES (?, ?, ?, ?)
      `;
      db.query(insertSql, [data.MaLop, data.MaSV, data.QT, data.CK], callback);
    });
  },

  update: (id, data, callback) => {
    const sql = `
      UPDATE Lop_SinhVien SET QT = ?, CK = ?
      WHERE id = ?
    `;
    db.query(sql, [data.QT, data.CK, id], callback);
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM Lop_SinhVien WHERE id = ?`;
    db.query(sql, [id], callback);
  },
};

module.exports = LopSinhVien;
