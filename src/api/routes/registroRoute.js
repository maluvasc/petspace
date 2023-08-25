//rotas registro diário

const { Router } = require("express");
const RegistroController = require("../controllers/RegistroController.js");

const router = Router();

router.get("/api/home/registros", RegistroController.pegaTodosOsRegistros);
router.get("/api/home/registros/:id", RegistroController.pegaUmRegistro);
router.post("/api/home/registros", RegistroController.criaRegistro);
router.put("/api/home/registros/:id", RegistroController.atualizaRegistros);
router.delete("/api/home/registros/:id", RegistroController.deletaRegistro);

module.exports = router;