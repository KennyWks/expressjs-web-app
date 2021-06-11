const UserRouter = require("express").Router();
const ValidationUsers = require("../middleware/validationUsers");
const ValidationLogin = require("../middleware/validationLogin");

const {
  GetDetailUserController,
  GetFormRegisterController,
  GetFormLoginController,
  RegisterController,
  LoginController,
  LogoutController,
} = require("../controllers/users");

UserRouter.get("/formRegister", GetFormRegisterController);
UserRouter.get("/formLogin", GetFormLoginController);
UserRouter.get("/logout", LogoutController);
UserRouter.get("/:id", GetDetailUserController);
UserRouter.post("/register", ValidationUsers, RegisterController);
UserRouter.post("/login", ValidationLogin, LoginController);

module.exports = UserRouter;
