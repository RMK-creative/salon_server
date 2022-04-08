const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3080;

const authRouters = require("./routes/authRouters");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

const domainsFromEnv = process.env.CORS_DOMAINS || "";

const whitelist = domainsFromEnv.split(",").map((item) => item.trim());

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
//   next();
// });

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require("dotenv").config();

const mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB);

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku test route
app.get("/", (req, res) => {
  res.send("server is running ..");
});

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
