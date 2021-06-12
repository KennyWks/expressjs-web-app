const { runQuery } = require("../config/db");

exports.CreateStudentModel = (data) => {
  return new Promise((resolve, reject) => {
    runQuery(
      `INSERT INTO students (name, nim, email, major) values ('${data.name}','${data.nim}','${data.email}','${data.major}')`,
      (err, result) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(result);
      }
    );
  });
};

exports.UpdateStudentModel = (id, body) => {
  return new Promise((resolve, reject) => {
    runQuery(
      `UPDATE students SET ${Object.keys(body)
        .map((v) => `${v} = '${body[v]}'`)
        .join(",")} WHERE id=${id}`,
      (err, result) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(result);
      }
    );
  });
};

exports.DeleteStudentModel = (id) => {
  return new Promise((resolve, reject) => {
    runQuery(`DELETE FROM students WHERE id=${id}`, (err, result) => {
      if (err) {
        return reject(new Error(err));
      }
      return resolve(result);
    });
  });
};

exports.GetAllStudentModel = () => {
  return new Promise((resolve, reject) => {
    runQuery(`SELECT * FROM students`, (err, result) => {
      if (err) {
        return reject(new Error(err));
      }
      return resolve(result);
    });
  });
};

exports.GetDetailStudentModel = (id) => {
  return new Promise((resolve, reject) => {
    runQuery(`SELECT * FROM students WHERE id = ${id}`, (err, result) => {
      if (err) {
        return reject(new Error(err));
      }
      return resolve(result);
    });
  });
};
