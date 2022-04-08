const Day = require("../models/day");

module.exports = {
  getAllDay: async (req, res, next) => {
    try {
      await Day.find().then((result) => {
        console.log(result)
        res.send(result)
        next();
      });
    } catch (error) {
      console.log(error);
    }
  },

  createDay: async (req, res) => {
    try {
      await Day.create({
        date: req.body.date,
        isAvailable: req.body.isAvailable,
      })
      res.json({
        message: "Day created successfully",
        success: true        
    })
} catch (error) {
    console.log(error);
}
},

  updateDay: async (req, res) => {
    const id = req.params.id;
    try {
      await Day.findOneAndUpdate({_id:id}, {
        date: req.body.date,
        isAvailable: req.body.isAvailable,
      });
      res.send(`Day ${id} updated`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteDay: async (req, res, next) => {
    const id = req.params.id;
    try {
      await Day.findOneAndDelete({ _id:id })
      .then((result) => {
        console.log(result)
        res.send(`Day ${id} deleted`)
        next();
      });
    } catch (error) {
      console.log(error);
    }
  },
};
