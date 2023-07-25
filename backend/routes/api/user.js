const express = require("express");
const User = require("../../models/User")

// const loginReq = require("../auth/isLoggedIn")

const router = express.Router();

router.use((res, req, next) => {
    next();
});


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

// Save User data to database
router.post("/api/user",async (req, res) => {

    User.findOne({email: req.body.email }).then( async (user) => {
        if(user){
            return res.status(400).json({email : "User already registered with this email id"})
        }else{
            const newUser = await User.create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                address: {
                    street: req.body.address.street,
                    city: req.body.address.city,
                    state: req.body.address.state,
                    country: req.body.address.country,
                    postalCode: req.body.address.postalCode,
                },
            });
            User.create(newUser).then((user) => {
                console.log("User created:", user);
            }).catch((error) => {
                console.error("Error creating user:", error);
            });
            return res.status(200).json({msg : newUser});
        }
    });
});

/* 

// Create new User
const newUser = {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    address: {
        street: "123 Main Street",
        city: "City",
        state: "State",
        country: "Country",
        postalCode: "12345",
    },
};

User.create(newUser)
    .then((user) => {
        console.log("User created:", user);
    })
    .catch((error) => {
        console.error("Error creating user:", error);
    });

// Read User
// Find a single user by ID
User.findById(userId)
    .then((user) => {
        console.log("User found:", user);
    })
    .catch((error) => {
        console.error("Error finding user:", error);
    });


//   Update User
const updatedUser = {
    name: "Updated Name",
    email: "updated@example.com",
};

User.findByIdAndUpdate(userId, updatedUser, { new: true })
    .then((user) => {
        console.log("User updated:", user);
    })
    .catch((error) => {
        console.error("Error updating user:", error);
    });

// Delete User
User.findByIdAndDelete(userId)
    .then(() => {
        console.log("User deleted");
    })
    .catch((error) => {
        console.error("Error deleting user:", error);
    });
*/


module.exports = router;
