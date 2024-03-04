const jwt = require("jsonwebtoken")
const User = require("../models/UserModel")

exports.verifyToken = async (req,res,next)=>{
    //getting token from cookies 
    const {token} = req.cookies;
    try {
        // if no token found 
        if(!token) return res.status(401).json({success:false, message: "please login to access this ressource"})

        //verfication of the token
        const user = jwt.verify(token,process.env.JWT_SECRET);
         req.id = user.id;
         next();
        
    } catch (error) {
        return   res.status(401).json({success:false, message:"Invalid token or token expired"})
        
    }
}