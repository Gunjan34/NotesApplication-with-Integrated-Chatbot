import jwt from "jsonwebtoken";

import User from "../models/User.js";




// const middleware = async (req, res, next) => {
//     try {
//       // Check if Authorization header exists
//       if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
//         return res.status(401).json({ success: false, message: "Unauthorized, No Token Provided" });
//       }
  
//       // Extract token
//       const token = req.headers.authorization.split(" ")[1];
  
//       // Verify token
//       const decoded = jwt.verify(token, "secretKey1234#@");
//       if (!decoded) {
//         return res.status(401).json({ success: false, message: "Invalid Token" });
//       }
  
//       // Fetch user
//       const user = await User.findById(decoded.id);
//       if (!user) {
//         return res.status(404).json({ success: false, message: "User Not Found" });
//       }
  
//       // Attach user to request
//       req.user = { name: user.name, id: user._id };
//       next();
//     } catch (error) {
//       console.error("Middleware Error:", error);
//       return res.status(500).json({ success: false, message: "Authentication Error" });
//     }
//   };
const middleware = async (req, res, next) => {
  try {
    // Check if Authorization header exists
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Unauthorized, No Token Provided" });
    }

    // Extract token
    const token = req.headers.authorization.split(" ")[1];

    // Ensure token is not empty
    if (!token || token.trim() === "") {
      return res.status(401).json({ success: false, message: "Invalid Token: Token is empty" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ success: false, message: "Token has expired, please login again" });
      } else if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ success: false, message: "Invalid Token" });
      }
      return res.status(500).json({ success: false, message: "Authentication Error" });
    }

    // Ensure decoded token has an ID
    if (!decoded || !decoded.id) {
      return res.status(401).json({ success: false, message: "Invalid Token: No user ID found" });
    }

    // Fetch user
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User Not Found" });
    }

    // Attach user to request
    req.user = { name: user.name, id: user._id };
    next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return res.status(500).json({ success: false, message: "Authentication Error" });
  }
};


  

export default middleware;