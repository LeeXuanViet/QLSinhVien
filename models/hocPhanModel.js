const db = require('../config/db');

const createHocPhan = (hocPhanData, callback) => {
  const sql = 'INSERT INTO HocPhan SET ?';
  db.query(sql, hocPhanData, callback);
};
const getAll = (callback) => {
  const sql = 'SELECT * FROM HocPhan';
  db.query(sql, callback);
};
const updateById = (id, data, callback) => {
  const sql = 'UPDATE HocPhan SET ? WHERE id = ?';
  db.query(sql, [data, id], callback);
};
const deleteById = (id, callback) => {
  const sql = 'DELETE FROM HocPhan WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = {
  createHocPhan,
  getAll,
  updateById,
  deleteById
};
