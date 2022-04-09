const mongoose = require("mongoose");

const { Schema } = mongoose;

const dogSchema = new Schema({
    dogName: String,
    size: {
      type: String,
      required: true
    },
    hair: {
      type: String,
      required: true
    },    
    info: String
  });

const appointmentSchema = new Schema({
    day: {
        date: {
            type: Date,
            required: true
        },
        isAvailable: {
            type: Boolean,
            required: false
        }
    },  
    time: {
        startTime: {
        type: String,
        required: true
    },
        timeAvailable: {
        type: Boolean,
        required: false
    },    
    },
    customer: {
        name: {
            type: String,
            required: true
          },
          email: {
            type: String,
            required: false
          },
          phone: {
            type: String,
            required: false
          },
          dogs: [dogSchema]
    },
    service: {
        title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: false,
          },
          cost: {
            type: Number,
            required: false,
          },
          duration: {
            type: Number,
            required: true,
          },
    }
//--------------------------------------------------------------------
    // date: {
    //     type: Schema.Types.ObjectId,
    //     ref: "day"
    // },
    // startTime: {
    //     type: Schema.Types.ObjectId,
    //     ref: "time"
    // },
    // name: {
    //     type: Schema.Types.ObjectId,
    //     ref: "customer"
    // },
    // dogs: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "customer"
    // }],
    // title: {
    //     type: Schema.Types.ObjectId,
    //     ref: "service"
    // }
});


// --------------------------------------------------

module.exports.schema = appointmentSchema;
module.exports.schema = dogSchema;
module.exports = mongoose.model("appointment", appointmentSchema);