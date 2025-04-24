const db = require('../config/db');

const createUser = (userData, callback) => {
  const sql = `INSERT INTO Users SET ?`;
  db.query(sql, userData, callback);
};

module.exports = {
  createUser
};
