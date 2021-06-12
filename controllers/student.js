const { validationResult } = require("express-validator");
const {
  CreateStudentModel,
  GetAllStudentModel,
  GetDetailStudentModel,
  UpdateStudentModel,
  DeleteStudentModel,
} = require("../models/student");

exports.GetHomeController = async (req, res) => {
  try {
    const result = await GetAllStudentModel();
    res.render("home", {
      navbar: "My JS Web",
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

exports.GetFormCreateStudentController = (req, res) => {
  try {
    const major = [
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
      title: "Form Create New Student",
      navbar: "My JS Web",
      major: major,
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

exports.CreateStudentController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const major = [
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
        title: "Form Create New Student",
        navbar: "My JS Web",
        major: major,
      });
    } else {
      const data = {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        major: req.body.major,
      };
      const result = await CreateStudentModel(data);
      req.flash("success", "Student is added");
      res.redirect("/student");
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

exports.GetFormUpdateStudentController = async (req, res) => {
  try {
    const major = [
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
    const result = await GetDetailStudentModel(req.params.id);
    res.render("formEdit", {
      title: "Form Edit Student",
      navbar: "My JS Web",
      major: major,
      student: result[1][0],
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

exports.UpdateStudentController = async (req, res) => {
  try {
    const dataUpdate = {};
    const fillAble = ["name", "nim", "email", "major"];
    fillAble.forEach((v) => {
      if (req.body[v]) {
        dataUpdate[v] = req.body[v];
      }
    });
    const result = await UpdateStudentModel(req.body.id, dataUpdate);
    res.redirect("/student/" + req.body.id);
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.GetAllStudentController = async (req, res) => {
  try {
    const result = await GetAllStudentModel();
    res.render("student", {
      title: "Data student",
      navbar: "My JS Web",
      student: result[1],
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

exports.GetDetailStudentController = async (req, res) => {
  try {
    const result = await GetDetailStudentModel(req.params.id);
    res.render("detailStudent", {
      title: `Data Student ${req.params.id}`,
      navbar: "My JS Web",
      student: result[1][0],
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

exports.DeleteStudentAjaxController = async (req, res) => {
  try {
    const result = await DeleteStudentModel(req.params.id);
    res.send("Student is deleted");
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.DeleteStudentController = async (req, res) => {
  try {
    const result = await DeleteStudentModel(req.body.id);
    req.flash("success", "Student is deleted");
    res.redirect("/student");
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};
