const db = require('../config/db');

const KyHoc = {
  getAll: (callback) => {
    db.query('SELECT * FROM KyHoc', callback);
  },

  create: (data, callback) => {
    const { TenKyHoc, HocKy, NamHoc } = data;
    db.query(
      'INSERT INTO KyHoc (TenKyHoc, HocKy, NamHoc) VALUES (?, ?, ?)',
      [TenKyHoc, HocKy, NamHoc],
      callback
    );
  },

  update: (id, data, callback) => {
    const { TenKyHoc, HocKy, NamHoc } = data;
    db.query(
      'UPDATE KyHoc SET TenKyHoc = ?, HocKy = ?, NamHoc = ? WHERE id = ?',
      [TenKyHoc, HocKy, NamHoc, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM KyHoc WHERE id = ?', [id], callback);
  }
};

module.exports = KyHoc;
