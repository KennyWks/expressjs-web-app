const {
    runQuery
} = require("../config/db");

exports.CreateMahasiswaModel = (data) => {
    return new Promise((resolve, reject) => {
        runQuery(`INSERT INTO tbl_mhs (nama, nim, email, prodi) values ('${data.nama}','${data.nim}','${data.email}','${data.prodi}')`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        });
    });
}

exports.UpdateMahasiswaModel = (id, body) => {
    return new Promise((resolve, reject) => {
        runQuery(`UPDATE tbl_mhs SET ${Object.keys(body).map((v) => `${v} = '${body[v]}'`).join(",")} WHERE id=${id}`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        });
    });
}

exports.DeleteMahasiswaModel = (id) => {
    return new Promise((resolve, reject) => {
        runQuery(`DELETE FROM tbl_mhs WHERE id=${id}`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        });
    });
}

exports.GetAllMahasiswaModel = () => {
    return new Promise((resolve, reject) => {
        runQuery(`SELECT * FROM tbl_mhs`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        });
    });
}

exports.GetDetailMahasiswaModel = (id) => {
    return new Promise((resolve, reject) => {
        runQuery(`SELECT * FROM tbl_mhs WHERE id = ${id}`, (err, result) => {
            if (err) {
                return reject(new Error(err));
            }
            return resolve(result);
        });
    });
}