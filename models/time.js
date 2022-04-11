const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    startTime: String,
    timeAvailable: Boolean    
});


module.exports.schema = timeSchema;

module.exports = mongoose.model("time", timeSchema);