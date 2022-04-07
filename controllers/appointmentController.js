const Appointment = require("../models/appointment");
const Day = require("../models/day");
const time = require("../models/time");
const customer = require("../models/customer");

module.exports = {
    getAllAppointment: async (req, res, next) => {
    try {
        await Appointment.find()
        .then(result => {
            console.log(result)
            res.send(result)
            next()})       
    } catch (error) {
        console.log(error)
    };
    },

    getIdAppointment: async (req, res, next) => {        
        try {
            await Appointment.findById(req.params.id)
            .then(result => {
                console.log(result)
                res.send(result)
                next()})            
        } catch (error) {
            console.log(error)            
        };
    },

    // createAppointment: async (req, res) => {
    //     // const {date, startTime, name} = req.body
    //     const { 
    //         date:{date, isAvailable}, 
    //         startTime:{startTime, isAvailable: startTimeAvaiable},
    //         // name:{name, email, phone} 
    //     } = req.body;
    //     try {     
    //         const appointmentDate = await Day.create({date, isAvailable});
    //         const appointmentTime = await Time.create({startTime, isAvailable: startTimeAvaiable});
    //         // const appointmentName = await Customer.create({name, email, phone});

    //         // const appointment = await Appointment.create({
    //         //     date,
    //         //     startTime,
    //         //     name,
    //         //     // title,
    //         //     // duration
    //         // });
    //         console.log(appointmentDate, appointmentTime);

    //         res.json({
    //             message: "Appointment created successfully",
    //             success: true,
    //             data: appointment
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         res.json({
    //             success: false,
    //             data: error
    //         })
    //     }
    // },

    createAppointment: async (req, res) => {
        try {
            const {day, time, customer, service} = req.body;
            console.log("REQUEST BODY", req.body);

            const appointmentDate = await Appointment.create({day, time, customer, service});

            res.json({
                message: "Appointment created successfully",
                success: true,
                data: appointmentDate
            })
        } catch (error) {
            console.log(error);
        }
    },
    
    updateAppointment: async (req, res) => {
        const id = req.params.id;
        try {
            const updateAppointment = await Appointment.findOneAndUpdate({_id:id}, {
                ...req.body
            },
            {new: true});
            console.log(updateAppointment)
            res.send(`Appointment ${id} updated`)            
        } catch (error) {
            console.log(error);            
        }
    },

    deleteAppointment: async (req, res, next) => {
        const id = req.params.id;
        try {
            await Appointment.findOneAndDelete({ _id:id })
                .then(result => {
                    console.log(result)
                    res.send(`Appointment ${id} deleted`)
                    next()})                       
        } catch (error) {
            console.log(error);
        }
    }

}    