const db = require("../config/db");

const DiemDanh = {
  getAll: (callback) => {
    const sql = `
      SELECT dd.*, u.Name AS TenSV, l.TenLop
      FROM DiemDanh dd
      JOIN Users u ON dd.MaSV = u.MaSV
      JOIN Lop l ON dd.MaLop = l.MaLop
    `;
    db.query(sql, callback);
  },

  getByMaSV: (MaSV, callback) => {
    const sql = `
      SELECT MaSV, COUNT(*) AS TongBuoi, 
             SUM(IsAbsent = 1) AS SoBuoiVang
      FROM DiemDanh
      WHERE MaSV = ?
      GROUP BY MaSV
    `;
    db.query(sql, [MaSV], callback);
  },

  getByMaLop: (MaLop, callback) => {
    const sql = `
      SELECT dd.MaSV, u.Name AS TenSV, COUNT(*) AS TongBuoi,
             SUM(dd.IsAbsent = 1) AS SoBuoiVang
      FROM DiemDanh dd
      JOIN Users u ON dd.MaSV = u.MaSV
      WHERE dd.MaLop = ?
      GROUP BY dd.MaSV, u.Name
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
        INSERT INTO DiemDanh (MaLop, MaSV, IsAbsent, Time)
        VALUES (?, ?, ?, ?)
      `;
      db.query(insertSql, [data.MaLop, data.MaSV, data.IsAbsent, data.Time], callback);
    });
  },

  update: (id, data, callback) => {
    const sql = `
      UPDATE DiemDanh
      SET MaLop = ?, MaSV = ?, IsAbsent = ?, Time = ?
      WHERE id = ?
    `;
    db.query(sql, [data.MaLop, data.MaSV, data.IsAbsent, data.Time, id], callback);
  },

  deleteById: (id, callback) => {
    const sql = `DELETE FROM DiemDanh WHERE id = ?`;
    db.query(sql, [id], callback);
  }
};

module.exports = DiemDanh;
