const mongoose = require('mongoose');
//const Schema = mongoose.Schema;


// const slotSchema = mongoose.Schema({
//     //minLength: 15*60*60,
//     //multiplier: Number,
//     isAvailable: Boolean,
//     // reservation: {
//     //     required: false,
//     //     type: reservation
//     // }
// });

const timeSchema = new mongoose.Schema({
    startTime: String,
    timeAvailable: Boolean
})


const daySchema = new mongoose.Schema({
    date: Date,
    isAvailable: Boolean,
    time: [timeSchema]
    
});
// module.exports.schema = slotSchema;
module.exports.schema = timeSchema;
module.exports.schema = daySchema;
module.exports = mongoose.model("day", daySchema);