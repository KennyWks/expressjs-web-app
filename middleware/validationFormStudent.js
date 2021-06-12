const { body } = require("express-validator");

const Rules = [
  body("name").notEmpty().withMessage("name is required"),
  body("email").isEmail().withMessage("email is not valid"),
  body("nim")
    .isLength({ min: 8 })
    .withMessage("column nim min length 8 character"),
  body("nim").isNumeric().withMessage("column nim must be number"),
  body("major").notEmpty().withMessage("major is required"),
];

module.exports = Rules;
