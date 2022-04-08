const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getIdUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;