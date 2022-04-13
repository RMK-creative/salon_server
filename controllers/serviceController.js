const Service = require("../models/service");

module.exports = {
  getAllServices: async (req, res) => {
    Service.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getIdService: async (req, res, next) => {
    try {
      await Service.findById(req.params.id).then((result) => {
        console.log(result);
        res.send(result);
        // next();
      });
    } catch (error) {
      console.log(error);
    }
  },
  createService: async (req, res) => {
    try {
      await Service.create({
        title: req.body.title,
        description: req.body.description,
        cost: req.body.cost,
        duration: req.body.duration,
      });
      res.redirect("/service");
    } catch (error) {
      console.log(error);
    }
  },
  updateService: async (req, res) => {
    const id = req.params.id;
    try {
      const updated = await Service.findOneAndUpdate(
        { _id: id },
        {
          title: req.body.title,
          description: req.body.description,
          cost: req.body.cost,
          duration: req.body.duration,
        }
      );
      console.log(updated);
      res.send(`Service ${id} updated`);
    } catch (error) {
      console.log(error);
    }
  },
  deleteService: (req, res) => {
    const id = req.params.id;

    Service.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/" });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
