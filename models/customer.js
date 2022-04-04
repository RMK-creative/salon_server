const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const dogSchema = mongoose.Schema({
  dogName: String,
  size: {
    type: String,
    required: true
  },
  hair: {
    type: String,
    required: true
  },    
  info: String
});


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
  dogs: [dogSchema]
});

module.exports.schema = customerSchema;
module.exports.schema = dogSchema;

module.exports = mongoose.model("customer", customerSchema);
