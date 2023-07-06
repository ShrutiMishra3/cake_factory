const mongoose = require("mongoose");
const express = require("express");


const connectDB = async (req, res, next) => {
    console.log("Inside");
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
    next();
};

module.exports = { connectDB };
