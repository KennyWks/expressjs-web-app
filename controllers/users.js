const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const { CreateUserModel, GetDetailUserModel } = require("../models/users");
const passport = require("passport");

exports.GetFormRegisterController = (req, res) => {
  try {
    res.render("formRegister", {
      title: "Form Register",
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

exports.RegisterController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("formRegister", {
        errors: errors.array(),
        title: "Form Register User",
        navbar: "My JS Web",
      });
    } else {
      const result = await GetDetailUserModel(req.body.username);
      if (result[1].length > 0) {
        req.flash("danger", "Username is exist!");
        res.redirect("/users/formRegister");
      } else {
        const hashPassword = bcrypt.hashSync(req.body.password);
        const data = {
          username: req.body.username,
          password: hashPassword,
          status: 0,
          role_id: 2,
        };
        await CreateUserModel(data);
        req.flash("success", "Your accout is registered");
        res.redirect("/users/formLogin");
      }
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

exports.GetFormLoginController = (req, res) => {
  try {
    res.render("formLogin", {
      title: "Form Login",
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

exports.GetDetailUserController = async (req, res) => {
  try {
    const result = await GetDetailUserModel(req.body.username);
  } catch (error) {
    console.log(error);
    res.status(404).send({
      error: {
        msg: error.message || "something wrong",
      },
    });
  }
};

exports.LoginController = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/student",
    failureRedirect: "/users/formLogin",
    failureFlash: true,
  })(req, res, next);
};

exports.LogoutController = (req, res) => {
  req.logout();
  req.flash("success", "Your are logged out!");
  res.redirect("/users/formLogin");
};
