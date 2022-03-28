const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slotsSchema = require('./slots').schema

const daySchema = new Schema({
    date: Date,
    slots: [slotsSchema]
    
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;
module.exports.Schema = daySchema;