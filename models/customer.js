const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  dogs: {
    dogName: String,
    // image: File,
    size: String,
    hair: String,
    info: String
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
module.exports.Schema = customerSchema;
