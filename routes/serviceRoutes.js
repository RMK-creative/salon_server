const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getIdService);
router.post("/create-service", serviceController.createService);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
