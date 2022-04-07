const express = require("express");
const customerController = require("../controllers/customerController");
const router = express.Router();



router.get('/', customerController.getAllCustomer);

router.get('/:id', customerController.getIdCustomer);

router.post('/', customerController.createCustomer);

router.put('/:id', customerController.updateCustomer);

router.delete('/:id', customerController.deleteCustomer);


module.exports = router;