const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();



router.get('/', eventController.getAllEvent);

router.get('/:id', eventController.getIdEvent);

router.post('/event', eventController.createEvent);

// router.put('/:id', eventController.updateEvent);

// router.delete('/:id', eventController.deleteEvent);


module.exports = router;