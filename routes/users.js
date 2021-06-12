const UserRouter = require("express").Router();
const ValidationUsers = require("../middleware/validationFormRegister");
const Auth = require("../middleware/auth");

const {
  GetDetailUserController,
  GetFormRegisterController,
  GetFormLoginController,
  RegisterController,
  LoginController,
  LogoutController,
} = require("../controllers/users");

UserRouter.get("/", GetFormRegisterController);
UserRouter.get("/formRegister", Auth, GetFormRegisterController);
UserRouter.get("/formLogin", GetFormLoginController);
UserRouter.get("/logout", Auth, LogoutController);
UserRouter.post("/register", Auth, ValidationUsers, RegisterController);
UserRouter.post("/login", LoginController);
UserRouter.get("/:id", GetDetailUserController);

module.exports = UserRouter;
