const db = require("../config/db");

const LopGiaoVien = {
  getAll: (callback) => {
    const sql = `
      SELECT lgv.*, u.Name AS TenGV, l.TenLop
      FROM Lop_GiaoVien lgv
      JOIN Users u ON lgv.MaGV = u.MaGV
      JOIN Lop l ON lgv.MaLop = l.MaLop
    `;
    db.query(sql, callback);
  },

  getLopByMaGV: (MaGV, callback) => {
    const sql = `
      SELECT l.MaLop, l.TenLop, l.MaHP, l.TenKyHoc, l.DiaDiem, l.ThoiGian
      FROM Lop_GiaoVien lgv
      JOIN Lop l ON lgv.MaLop = l.MaLop
      WHERE lgv.MaGV = ?
    `;
    db.query(sql, [MaGV], callback);
  },

  getByMaLop: (MaLop, callback) => {
    const sql = `
      SELECT lgv.*, u.Name AS TenGV
      FROM Lop_GiaoVien lgv
      JOIN Users u ON lgv.MaGV = u.MaGV
      WHERE lgv.MaLop = ?
    `;
    db.query(sql, [MaLop], callback);
  },

  add: (data, callback) => {
    const sqlCheck = `
      SELECT * FROM Lop WHERE MaLop = ?;
      SELECT * FROM Users WHERE MaGV = ? AND Role = 1;
    `;
    db.query(sqlCheck, [data.MaLop, data.MaGV], (err, results) => {
      if (err) return callback(err);

      if (results[0].length === 0) return callback({ message: "MaLop không tồn tại" });
      if (results[1].length === 0) return callback({ message: "MaGV không hợp lệ" });

      const insertSql = `
        INSERT INTO Lop_GiaoVien (MaLop, MaGV, ThoiGianPhuTrach)
        VALUES (?, ?, ?)
      `;
      db.query(insertSql, [data.MaLop, data.MaGV, data.ThoiGianPhuTrach], callback);
    });
  },

  update: (id, data, callback) => {
    const sql = `
      UPDATE Lop_GiaoVien
      SET MaLop = ?, MaGV = ?, ThoiGianPhuTrach = ?
      WHERE id = ?
    `;
    db.query(sql, [data.MaLop, data.MaGV, data.ThoiGianPhuTrach, id], callback);
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM Lop_GiaoVien WHERE id = ?`;
    db.query(sql, [id], callback);
  }
};

module.exports = LopGiaoVien;
