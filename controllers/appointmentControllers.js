const Appoint = require('../models/appointment');
const { StatusCodes } = require('http-status-codes');

module.exports.appoint_post = async (req, res) => {
    const { date, time, customer, dogs, service, duration } = req.body;

    try {
        const appointment = await Appoint.create({ date, time, customer, dogs, service, duration });
        res.status(StatusCodes.OK).json({ appointment: appointment._id })
    } 
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
      }
}