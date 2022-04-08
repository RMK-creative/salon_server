const Time = require("../models/time");

module.exports = {
  getAllTime: async (req, res, next) => {
    try {
      await Time.find().then((result) => {
        console.log(result);
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
        isAvailable: req.body.isAvailable,
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  updateTime: async (req, res) => {
    const id = req.params.id;
    try {
      await Time.findOneAndUpdate(id, {
        startTime: req.body.startTime,
        isAvailable: req.body.isAvailable,
      });
      res.send(`Time ${id} updated`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteTime: async (req, res, next) => {
    const _id = req.params.id;
    try {
      await Time.findOneAndDelete({ _id }).then((result) => {
        console.log(result);
        next();
      });
    } catch (error) {
      console.log(error);
    }
  },
};
