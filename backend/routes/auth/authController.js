const User = require("../../models/User");
const { createSecretToken } = require("../../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, name, address } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false }).status(301);
    }
    const user = await User.create({ email, password, name, address });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
    const isSuccess = false;
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required', success: isSuccess})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email', success: isSuccess }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email', success: isSuccess }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: !isSuccess });
       next()
    } catch (error) {
      console.error(error);
    }
  }
