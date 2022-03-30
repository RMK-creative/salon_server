const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getAllServices);
router.post("/create-service", serviceController.createService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
