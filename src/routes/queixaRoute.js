const express = require("express");
const router = express.Router();
const queixaController = require("../controller/queixaController");
const { verifyToken } = require("../middleware/AuthIntercept");

router.get("/buscarTodos", verifyToken,  queixaController.buscarTodos);
router.get("/buscarAtivos", verifyToken,  queixaController.buscarAtivos);
router.get("/buscarPorPaciente/:idPaciente", verifyToken,  queixaController.buscarPorPaciente);

module.exports = router;