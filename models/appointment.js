const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const customer = require('./customer');

const appointmentSchema = new Schema({
    date: {
        type: date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    name: [customer],   //{type: Schema.Types.ObjectId, ref:'Customer'} 
    dogs: [{type: Schema.Types.ObjectId, ref:'customer'}],
    title: [serviceSchema],
    duration: [serviceSchema],
});

module.exports = mongoose.model("Appointment", appointmentSchema);
