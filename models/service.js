const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

// const Service = mongoose.model("Service", serviceSchema);
// module.exports.model = Service;

module.exports.schema = serviceSchema;

module.exports = mongoose.model("service", serviceSchema);
