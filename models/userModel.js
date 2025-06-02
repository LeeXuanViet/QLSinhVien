const db = require('../config/db');

const createUser = (userData, callback) => {
  const sql = `INSERT INTO Users SET ?`;
  db.query(sql, userData, callback);
};

const getAllUsers = (callback) => {
  const sql = `SELECT * FROM Users`;
  db.query(sql, callback);
};

const updateUser = (id, updatedData, callback) => {
  const sql = `UPDATE Users SET ? WHERE id = ?`;
  db.query(sql, [updatedData, id], callback);
};

const deleteUser = (id, callback) => {
  const sql = `DELETE FROM Users WHERE id = ?`;
  db.query(sql, [id], callback);
};


module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};
