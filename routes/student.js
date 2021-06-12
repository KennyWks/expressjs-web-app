const StudentRouter = require("express").Router();
const ValidationStudent = require("../middleware/validationFormStudent");
const Auth = require("../middleware/auth");

const {
  CreateStudentController,
  UpdateStudentController,
  DeleteStudentController,
  DeleteStudentAjaxController,
  GetFormCreateStudentController,
  GetFormUpdateStudentController,
  GetAllStudentController,
  GetDetailStudentController,
} = require("../controllers/student");

StudentRouter.post("/create", Auth, ValidationStudent, CreateStudentController);
StudentRouter.post("/update", Auth, ValidationStudent, UpdateStudentController);
StudentRouter.post("/delete", Auth, DeleteStudentController);
StudentRouter.get("/formCreate", Auth, GetFormCreateStudentController);
StudentRouter.get("/formEdit/:id", Auth, GetFormUpdateStudentController);
StudentRouter.delete("/:id", Auth, DeleteStudentAjaxController);
StudentRouter.get("/", GetAllStudentController);
StudentRouter.get("/:id", GetDetailStudentController);

module.exports = StudentRouter;
