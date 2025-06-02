const db = require('../config/db');

const Lop = {
  getAll: (callback) => {
    db.query('SELECT * FROM Lop', callback);
  },

  create: (data, callback) => {
    const { MaLop, MaHP, TenKyHoc, TenLop, DiaDiem, ThoiGian } = data;
    db.query(
      'INSERT INTO Lop (MaLop, MaHP, TenKyHoc, TenLop, DiaDiem, ThoiGian) VALUES (?, ?, ?, ?, ?, ?)',
      [MaLop, MaHP, TenKyHoc, TenLop, DiaDiem, ThoiGian],
      callback
    );
  },

  update: (id, data, callback) => {
    const { MaLop, MaHP, TenKyHoc, TenLop, DiaDiem, ThoiGian } = data;
    db.query(
      'UPDATE Lop SET MaLop = ?, MaHP = ?, TenKyHoc = ?, TenLop = ?, DiaDiem = ?, ThoiGian = ? WHERE id = ?',
      [MaLop, MaHP, TenKyHoc, TenLop, DiaDiem, ThoiGian, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Lop WHERE id = ?', [id], callback);
  }
};

module.exports = Lop;
