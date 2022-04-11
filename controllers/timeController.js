const Time = require("../models/time");

module.exports = {
  getAllTime: async (req, res, next) => {
    try {
      await Time.find().then((result) => {
        console.log(result)
        res.send(result)
        next();
      });
    } catch (error) {
      console.log(error);
    }
  },

  createTime: async (req, res) => {
    try {
      await Time.create({
        startTime: req.body.startTime,
        timeAvailable: req.body.timeAvailable,
      })
      res.json({
        message: "Time created successfully",
        success: true        
    })
  } catch (error) {
    console.log(error);
}
},

  updateTime: async (req, res) => {
    const id = req.params.id;
    try {
      await Time.findOneAndUpdate({_id:id}, {
        startTime: req.body.startTime,
        timeAvailable: req.body.timeAvailable,
      });
      res.send(`Time ${id} updated`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteTime: async (req, res, next) => {
    const id = req.params.id;
    try {
      await Time.findOneAndDelete({_id:id}).then((result) => {
        console.log(result)
        res.send(`Time ${id} deleted`)
        next();
      });
    } catch (error) {
      console.log(error);
    }
  },
};
