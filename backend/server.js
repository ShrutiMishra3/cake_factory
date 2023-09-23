var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
const { connectDB } = require("./config/db");

// Load Config
dotenv.config({ path: "./config/config.js" });

// Importing Routes
var index = require("./routes/index");
var user = require("./routes/api/user");
var cake = require("./routes/api/cake");

const app = express();
const PORT = process.env.PORT || 5500;

// Middlewares

// Connecting Database
app.use(connectDB);

app.use(cors());
app.use(bodyParser.json()); // parse application/json

// Calling different routes
app.use(index);
app.use(user);
app.use(cake);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
