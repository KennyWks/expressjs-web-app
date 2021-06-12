const HomeRouter = require("express").Router();

const { GetHomeController } = require("../controllers/student");

HomeRouter.get("/", GetHomeController);

module.exports = HomeRouter;
