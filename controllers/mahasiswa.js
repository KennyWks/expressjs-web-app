const { validationResult } = require("express-validator");
const {
  CreateMahasiswaModel,
  GetAllMahasiswaModel,
  GetDetailMahasiswaModel,
  UpdateMahasiswaModel,
  DeleteMahasiswaModel,
} = require("../models/mahasiswa");

exports.GetHomeController = async (req, res) => {
  try {
    const result = await GetAllMahasiswaModel();
    res.render("home", {
      title: "Data mahasiswa",
      navbar: "My JS Web",
      mahasiswa: result[1],
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.GetFormCreateMahasiswaController = (req, res) => {
  try {
    const prodi = [
      {
        id: 1,
        name: "Sistem Informasi S1",
      },
      {
        id: 2,
        name: "Teknik Informatika S1",
      },
      {
        id: 3,
        name: "Teknik Informatika D3",
      },
    ];
    res.render("formCreate", {
      title: "Form Create New Mahasiswa",
      navbar: "My JS Web",
      prodi: prodi,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.CreateMahasiswaController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const prodi = [
        {
          id: 1,
          name: "Sistem Informasi S1",
        },
        {
          id: 2,
          name: "Teknik Informatika S1",
        },
        {
          id: 3,
          name: "Teknik Informatika D3",
        },
      ];
      res.render("formCreate", {
        errors: errors.array(),
        title: "Form Create New Mahasiswa",
        navbar: "My JS Web",
        prodi: prodi,
      });
    } else {
      const data = {
        nama: req.body.nama,
        nim: req.body.nim,
        email: req.body.email,
        prodi: req.body.prodi,
      };
      const result = await CreateMahasiswaModel(data);
      req.flash("success", "Mahasiswa is added");
      res.redirect("/mahasiswa");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.GetFormUpdateMahasiswaController = async (req, res) => {
  try {
    const prodi = [
      {
        id: 1,
        name: "Sistem Informasi S1",
      },
      {
        id: 2,
        name: "Teknik Informatika S1",
      },
      {
        id: 3,
        name: "Teknik Informatika D3",
      },
    ];
    const result = await GetDetailMahasiswaModel(req.params.id);
    res.render("formEdit", {
      title: "Form Edit Mahasiswa",
      navbar: "My JS Web",
      prodi: prodi,
      mahasiswa: result[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.UpdateMahasiswaController = async (req, res) => {
  try {
    const dataUpdate = {};
    const fillAble = ["nama", "nim", "email", "prodi"];
    fillAble.forEach((v) => {
      if (req.body[v]) {
        dataUpdate[v] = req.body[v];
      }
    });
    const result = await UpdateMahasiswaModel(req.body.id, dataUpdate);
    res.redirect("/mahasiswa/" + req.body.id);
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.GetAllMahasiswaController = async (req, res) => {
  try {
    const result = await GetAllMahasiswaModel();
    res.render("admin", {
      title: "Data mahasiswa",
      navbar: "My JS Web",
      mahasiswa: result[1],
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.GetDetailMahasiswaController = async (req, res) => {
  try {
    const result = await GetDetailMahasiswaModel(req.params.id);
    res.render("detailMahasiswa", {
      title: `Data Mahasiswa ${req.params.id}`,
      navbar: "My JS Web",
      mahasiswa: result[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.DeleteMahasiswaAjaxController = async (req, res) => {
  try {
    const result = await DeleteMahasiswaModel(req.params.id);
    res.send("delete is succes");
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.DeleteMahasiswaController = async (req, res) => {
  try {
    const result = await DeleteMahasiswaModel(req.body.id);
    res.redirect("/mahasiswa");
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};
