const express = require("express");
const router = new express.Router();
const historialMedController = require("../controllers/historialMed.controlador");

router.get("/api/historial-medico", historialMedController.getHistorial);

// router.use(authMiddleware);

module.exports = router;
