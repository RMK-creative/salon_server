const mongoose = require("mongoose");
const customerSchema = require('./customer').schema;
const serviceSchema = require('./service').schema;

const dateTimeSchema = mongoose.Schema({
   dateTime: {
      type: Date,
      //required: true,
     },
   timeZone: String,   
});

const eventSchema = new mongoose.Schema({
   summary:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      //required: true,
    },
    start:[dateTimeSchema],
    end:[dateTimeSchema],

   // date: {
   //    type: date,
   //    required: true,
   // },
   // time: {
   //    type: String,
   //    required: true,
   // },
   // name: [customerSchema],
   // dogs: [customerSchema],
   // title: [serviceSchema],
   // duration: [serviceSchema],
});
// 
module.exports.schema = eventSchema;
module.exports.schema = dateTimeSchema;
module.exports = mongoose.model("event", eventSchema);