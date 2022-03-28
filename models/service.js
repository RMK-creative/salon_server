const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
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

module.exports = mongoose.model("Service", serviceSchema);
