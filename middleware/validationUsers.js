const { body } = require("express-validator");

const Rules = [
  body("username").notEmpty().withMessage("Username anda tidak boleh kosong"),
  body("username").isEmail().withMessage("Username must be a email"),
  body("password").notEmpty().withMessage("Password is required"),
  body("password2")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match password");
      }
      // Indicates the success of this synchronous custom validator
      return true;
    })
];

module.exports = Rules;
