//rotas do dono

const { Router } = require("express");
const DonoController = require("../controllers/DonoController.js");

const router = Router();

router.get("/api/donos", DonoController.pegaTodosOsDonos);
router.get("/api/donos/:id", DonoController.pegaUmDono);
router.post("/api/donos", DonoController.criaDono);
router.put("/api/donos/:id", DonoController.atualizaDono);
router.delete("/api/donos/:id", DonoController.deletaDono);

module.exports = router;