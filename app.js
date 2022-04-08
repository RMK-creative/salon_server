const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3080;

const authRouters = require("./routes/authRouters");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require("dotenv").config();

const mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB);

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Services Route
app.use("/service", require("./routes/serviceRoutes"));
app.use("/service/:id", require("./routes/serviceRoutes"));
app.use("/customer", require("./routes/customerRoutes"));
app.use("/customer/:id", require("./routes/customerRoutes"));
app.use("/event", require("./routes/eventRoutes"));
app.use("/appointment", require("./routes/appointmentRoutes"));
app.use("/appointment/:id", require("./routes/appointmentRoutes"));
app.use("/day", require("./routes/dayRoutes"));
app.use("/time", require("./routes/timeRoutes"));

//AuthRouters
app.use(authRouters);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
