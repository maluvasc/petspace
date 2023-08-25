//rotas api pets

const { Router } = require("express");
const PetController = require("../controllers/PetController.js");

const router = Router();

router.get("/api/pets", PetController.pegaTodosOsPets);
router.get("/api/pets/:id", PetController.pegaUmPet);
router.post("/api/pets", PetController.criaPet);
router.put("/api/pets/:id", PetController.atualizaPet);
router.delete("/api/pets/:id", PetController.deletaPet);

module.exports = router;