const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = require('./customer').schema;
const serviceSchema = require('./service').schema;


const appointmentSchema = new Schema({
    date: {
        type: date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    customer: customerSchema.name,   
    dogs: customerSchema.dogs,
    service: serviceSchema.title,
    duration: serviceSchema.duration,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports.model = Appointment;
module.exports.schema = appointmentSchema;
