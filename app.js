const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3080;
const authRouters = require('./routers/authRouters');
const cookieParser = require('cookie-parser');

const Customer = require("./models/customer");

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

require("dotenv").config();

const mongoDB = process.env.DB_URI;
mongoose.connect(mongoDB);

app.use(authRouters);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
