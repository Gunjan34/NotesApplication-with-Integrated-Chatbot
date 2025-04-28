import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import middleware from "../middleware/middleware.js";
const router = express.Router();

//Register user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in adding user" });
  }
});

//Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not exists" });
    }

    //compare password
    const checkpassword = await bcrypt.compare(password, user.password);
    if (!checkpassword) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong credentials" });
    }
    //generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    return res
      .status(200)
      .json({
        success: true,
        token,
        user: { name: user.name },
        message: "Login successfully"
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Login user" });
  }
});

router.get("/verify", middleware,async(req,res)=>{
  return res.status(200).json({success:true,user:req.user})
  
})
export default router;
