const { runQuery } = require("../config/db");

exports.CreateUserModel = (data) => {
  return new Promise((resolve, reject) => {
    runQuery(
      `INSERT INTO users (username, password, status, role_id) values ('${data.username}','${data.password}','${data.status}','${data.role_id}')`,
      (err, result) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(result);
      }
    );
  });
};

exports.GetDetailUserModel = (username) => {
  return new Promise((resolve, reject) => {
    runQuery(
      `SELECT * FROM users WHERE username = '${username}'`,
      (err, result) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(result);
      }
    );
  });
};