const { body } = require("express-validator");

const Rules = [
  body("username").notEmpty().withMessage("Username anda tidak boleh kosong"),
  body("username").isEmail().withMessage("Username must be a email"),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = Rules;
