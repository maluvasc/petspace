//rotas de checkin

const { Router } = require("express");
const CheckInController = require("../controllers/CheckInController.js");

const router = Router();

router.get("/api/checkins", CheckInController.pegaTodosOsCheckIns);
router.get("/api/checkins/:id", CheckInController.pegaUmCheckIn);
router.post("/api/checkins", CheckInController.criaCheckIn);
router.put("/api/checkins/:id", CheckInController.atualizaCheckIn);
router.delete("/api/checkins/:id", CheckInController.deletaCheckIn);

module.exports = router;