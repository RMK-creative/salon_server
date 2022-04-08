const express = require("express");
const dayController = require("../controllers/dayController");
const router = express.Router();



router.get('/', dayController.getAllDay);

router.post('/', dayController.createDay);

router.put('/:id', dayController.updateDay);

router.delete('/:id', dayController.deleteDay);


module.exports = router;