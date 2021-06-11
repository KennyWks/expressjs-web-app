const MahasiswaRouter = require("express").Router();
const ValidationMahasiswa = require("../middleware/validationMahasiswa");

const {
  CreateMahasiswaController,
  UpdateMahasiswaController,
  DeleteMahasiswaController,
  DeleteMahasiswaAjaxController,
  GetFormCreateMahasiswaController,
  GetFormUpdateMahasiswaController,
  GetAllMahasiswaController,
  GetDetailMahasiswaController,
} = require("../controllers/mahasiswa");

MahasiswaRouter.post("/create", ValidationMahasiswa, CreateMahasiswaController);
MahasiswaRouter.post("/update", ValidationMahasiswa, UpdateMahasiswaController);
MahasiswaRouter.post("/delete", DeleteMahasiswaController);
MahasiswaRouter.get("/formCreate", GetFormCreateMahasiswaController);
MahasiswaRouter.get("/formEdit/:id", GetFormUpdateMahasiswaController);
MahasiswaRouter.delete("/:id", DeleteMahasiswaAjaxController);
MahasiswaRouter.get("/", GetAllMahasiswaController);
MahasiswaRouter.get("/:id", GetDetailMahasiswaController);

module.exports = MahasiswaRouter;
