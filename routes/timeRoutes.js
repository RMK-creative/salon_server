const express = require("express");
const timeController = require("../controllers/timeController");
const router = express.Router();



router.get('/', timeController.getAllTime);

router.post('/', timeController.createTime);

router.put('/:id', timeController.updateTime);

router.delete('/:id', timeController.deleteTime);


module.exports = router;