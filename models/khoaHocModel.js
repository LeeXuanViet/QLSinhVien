const db = require('../config/db');

const KhoaHoc = {
  getAll: (callback) => {
    db.query('SELECT * FROM KhoaHoc', callback);
  },

  create: (data, callback) => {
    const { MaKH, TenKhoaHoc, NamBatDau, NamKetThuc } = data;
    db.query(
      'INSERT INTO KhoaHoc (MaKH, TenKhoaHoc, NamBatDau, NamKetThuc) VALUES (?, ?, ?, ?)',
      [MaKH, TenKhoaHoc, NamBatDau, NamKetThuc],
      callback
    );
  },

  update: (id, data, callback) => {
    const { MaKH, TenKhoaHoc, NamBatDau, NamKetThuc } = data;
    db.query(
      'UPDATE KhoaHoc SET MaKH = ?, TenKhoaHoc = ?, NamBatDau = ?, NamKetThuc = ? WHERE id = ?',
      [MaKH, TenKhoaHoc, NamBatDau, NamKetThuc, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM KhoaHoc WHERE id = ?', [id], callback);
  }
};

module.exports = KhoaHoc;
