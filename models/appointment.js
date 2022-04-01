const mongoose = require("mongoose");
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
    name: {customerSchema},   
    dogs: {customerSchema},
    title: {serviceSchema},
    duration: {serviceSchema},
});

module.exports.schema = appointmentSchema;

module.exports = mongoose.model("appointment", appointmentSchema);
