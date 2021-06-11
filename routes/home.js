const HomeRouter = require("express").Router();

const {
  GetHomeController,
} = require("../controllers/mahasiswa");

HomeRouter.get("/", GetHomeController);

module.exports = HomeRouter;
