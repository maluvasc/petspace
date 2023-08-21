const { Router } = require("express");
const FuncionarioController = require("../controllers/FuncionarioController.js");

const router = Router();

router.get("/api/funcionarios/", FuncionarioController.pegaTodosOsFuncionarios);
router.get("/api/funcionarios/:id", FuncionarioController.pegaUmFuncionario);
router.post("/api/funcionarios", FuncionarioController.cadastrar);
router.put("/api/funcionarios/:id", FuncionarioController.atualizaFuncionario);
router.delete("/api/funcionarios/:id", FuncionarioController.deletaFuncionario);

module.exports = router;