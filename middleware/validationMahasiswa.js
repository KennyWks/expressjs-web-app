const { body } = require("express-validator");

const Rules = [
  body("nama").notEmpty().withMessage("nama anda tidak boleh kosong"),
  body("email").isEmail().withMessage("email tidak valid"),
  body("nim")
    .isLength({ min: 8 })
    .withMessage("column nim min length 8 character"),
  body("nim").isNumeric().withMessage("column nim must be number"),
  body("prodi").notEmpty().withMessage("anda belum memilih prodi"),
];

module.exports = Rules;
