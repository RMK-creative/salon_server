const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  first_name: String,
  email: String,
});

module.exports = mongoose.model("Customer", customerSchema);
