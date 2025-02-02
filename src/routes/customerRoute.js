const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");
const { verifyToken } = require("../middleware/AuthIntercept");

router.post("/buscarTodos", verifyToken,  customerController.buscarTodos);

module.exports = router;