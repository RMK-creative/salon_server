const Service = require("../models/service");
console.log(Service);

module.exports = {
  createService: async (req, res) => {
    try {
      await Service.create({
        title: req.body.title,
        description: req.body.description,
        cost: req.body.cost,
        duration: req.body.duration,
      });
      res.redirect("/");
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
