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
const daySchema = new mongoose.Schema({
    date: Date,
    isAvailable: Boolean    
});
// module.exports.schema = slotSchema;
module.exports.schema = daySchema;
module.exports = mongoose.model("day", daySchema);