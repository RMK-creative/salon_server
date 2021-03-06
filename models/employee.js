const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    Information: {
        type: String,        
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports.model = Employee;
module.exports.schema = employeeSchema;
