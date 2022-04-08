const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const router = express.Router();



router.get('/', appointmentController.getAllAppointment);

router.get('/:id', appointmentController.getIdAppointment);

router.post('/', appointmentController.createAppointment);

router.put('/:id', appointmentController.updateAppointment);

router.delete('/:id', appointmentController.deleteAppointment);


module.exports = router;