const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; // Number of salt rounds for bcrypt hashing
const secretKey = process.env.SECRET_KEY || 'big-secret-key'; // Replace with a secure secret key

const User = require("../../models/User");
const { Signup, Login } = require("../auth/authController");
const { route } = require("./cake");
const { userVerification } = require("../auth/authRoute");


const router = express.Router();

router.use((res, req, next) => {
    next();
});

// Authorization middleware
router.post("/api/", userVerification)



//  Find all users
router.get("/api/user/", (req, res) => {
    User.find().then((users) => {
        console.log("All users:", users);
        res.status(200).json(users);
    }).catch((error) => {
        console.error("Error finding users:", error);
    });
});

// Get user by his id
router.get("/api/user/:id", (req, res) => {
    User.findById(req.params.id).then( (data) => {
        if(data){
            res.status(200);
            res.send(data);
        }}).catch((error) => {
            res.status(400);
            console.log("Error Occured: ",error);
            res.send("Error Occured: ",error);
        })
});

router.post("/api/login", Login)
router.post("/api/register", Signup)

module.exports = router;
