const express = require("express");
const appoitmentController = require("../controllers/appointmentController");
const router = express.Router();



router.get('/', appoitmentController.getAllAppointment);

router.get('/:id', appoitmentController.getIdAppointment);

router.post('/', appoitmentController.createAppointment);

router.put('/:id', appoitmentController.updateAppointment);

router.delete('/:id', appoitmentController.deleteAppointment);


module.exports = router;