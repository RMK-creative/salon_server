const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3080;

const Customer = require("./models/customer");
const Service = require("./models/service");

const app = express();

require("dotenv").config();

const mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB);

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  Customer.create({
    name: "Szanzinski",
    first_name: "Rosie",
    email: "rosie@mail.com",
  }).then(function (newCustomer) {
    console.log("new customer added");
    res.send(newCustomer);
  });
});

// Services Route
app.use("/service", require("./routes/serviceRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
