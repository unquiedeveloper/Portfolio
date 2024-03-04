const User = require("../models/UserModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")


//signup route 
exports.signup = async (req, res) => {
    const { name, email, password } = req.body

    let user;
    try {
        // checking user exists
        user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "user already exists" })

        // hashing the password 
        const securePassword = await bcrypt.hash(password, 10);

        //creating a new user
        user = await User.create({
            name: name,
            email: email,
            password: securePassword,
        })

        // saving user to database 
        await user.save();
        return res.status(201).json({ success: true, message: "User created successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })

    }

}

exports.login = async (req,res)=>{
    const {email,password} = req.body;
    try {
        // checking user exists
        let user = await User.findOne({email})

        if(!user) return res.status(404).json({succes:false,message:"Invalid"});

        //checking if password match 
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword) return res.status(400).json({success:false,message:"incorrect credentails"})

        // if password matches 
        // checking if "token" cookie exists in the request
        const existingToken = req.cookies.token;

        if(existingToken){
            //clear the exists token
            res.clearCookie("token")
        }
        // creating a token
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: "30s"})
        //sending token in cookie
        res.cookie("token",token,{
            path:"/",
            httpOnly: true, //client side js cannont access cookies
            expiresIn: new Date(Date.now() + 1000*30),
            sameSite: "lax", 
        })
        
        return res.stauts(200).json({success:true, message: "logged in"})
        
    } catch (error) {
        return res.status(500).json({success:false, message: error.message})
        
    }
}

exports.logout = async (req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({success:true, message:"logged out"})
    } catch (error) {
        return res.status(500).json({success:false, message: error.message})
        
    }
}