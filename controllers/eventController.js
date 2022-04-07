const { find } = require("../models/event");
const Event = require("../models/event");
const {google} = require('googleapis');
require('dotenv').config();


// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({version : "v3"});

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);

// Your TIMEOFFSET Offset
const TIMEOFFSET = '';

// Get date-time string for calender
const dateTimeForCalander = () => {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;
    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));

    return {
        'start': startDate,
        'end': endDate
    }
};

module.exports = {
    getAllEvent: async (req, res, next) => {
    try {
        await Event.find() 
        .then(result => {
            console.log(result)
            next()})       
    } catch (error) {
        console.log(error)
    };
    },

    getIdEvent: async (req, res, next) => {        
        try {
            await Event.findById(req.params.id)
            .then(result => {
                console.log(result)
                next()})            
        } catch (error) {
            console.log(error)            
        };
    },

    createEvent: async (req, res) => {
        //console.log(req)        
        const insertEvent = async (event) => {
            try {
                let res = await calendar.events.insert({
                    auth: auth,
                    calendarId: calendarId,
                    resource: event
                });
            console.log(res);
                if (res['status'] == 200 && res['statusText'] === 'OK') {
                    return 1;
                } else {
                    return 0;
                }
            } catch (error) {
                console.log(`Error at insertEvent --> ${error}`);
                return 0;
            }        
         };
        let dateTime = dateTimeForCalander();

        // // Event for Google Calendar
        let event = {
         
        //         // start: req.body.start,
        //         // end: req.body.end,
        //         // name: [customerSchema],
        //         // dogs: [customerSchema],
        //         // title: [serviceSchema],
        //         // duration: [serviceSchema],
            summary: req.body.summary,
            description: req.body.description,
            start: [{
                dateTime: req.body.start[0].dateTime,
                timeZone: req.body.start[0].dateTime
            }],
            end: [{
                dateTime: req.body.start[0].dateTime,
                timeZone: req.body.end[0].timeZone
            }]
         };
        insertEvent(event)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });


     },



    // updateEvent: async (req, res) => {
    //     const id = req.params.id;
    //     try {
    //         await Event.findOneAndUpdate(id, {
    //             //id: req.body.id,
    //             start: req.body.start,
    //             end: req.body.end,
    //             status: req.body.status, 
    //             creator: req.body.creator,
    //             description: req.body.description,
    //         });
    //         res.send(`Event ${id} updated`)            
    //     } catch (error) {
    //         console.log(error);            
    //     }
    // },

    // deleteEvent: (req, res) => {
    //     const id = req.params.id;
    //     try {
    //         await Event.findByIdAndDelete(id)
    //         .then((result) => {
    //         res.json({ redirect: "/" });
    //         })            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}
