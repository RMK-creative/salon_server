const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const customerSchema = new mongoose.Schema({
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
  dogs: [{
    dogName: String,
    //image: File,
    size: String,
    hair: String,
    info: String
  }]
});

module.exports.schema = customerSchema;

module.exports = mongoose.model("customer", customerSchema);
