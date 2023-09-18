const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10; // Number of salt rounds for bcrypt hashing
const secretKey = 'big-secret-key'; // Replace with a secure secret key

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

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user with the provided email exists
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ email: "User not found" });
      }
  
      // Compare the hashed password with the provided password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ password: "Incorrect password" });
      }
  
      // Create a JWT token for authentication
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  
      // Return the token to the client
      return res.status(200).json({ token });
  
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Save User data to database
router.post("/api/register", async (req, res) => {
  const { name, email, password, address } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ email: "User already registered with this email id" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    console.log("User created:", savedUser);
    return res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
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
