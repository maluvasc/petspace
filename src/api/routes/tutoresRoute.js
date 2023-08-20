const { Router } = require("express");
const TutorController = require("../controllers/TutorController.js");

const router = Router();

router.get("/api/tutores", TutorController.pegaTodosOsTutores);
router.get("/api/tutores/:id", TutorController.pegaUmTutor);
router.post("/api/tutores", TutorController.criaTutor);
router.put("/api/tutores/:id", TutorController.atualizaTutor);
router.delete("/api/tutores/:id", TutorController.deletaTutor);

module.exports = router;