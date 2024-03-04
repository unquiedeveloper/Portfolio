const jwt = require("jsonwebtoken")

exports.refreshToken=async (req,res,next)=>{
    try {
        const cookies = req.headers.cookie;
        const prevToken = cookies.split("=")[1];
        if(!prevToken)  return res.status(402).json({success:false, message:"plz login first"})

        // verify token
        jwt.verify(prevToken,process.env.JWT_SECRET,(error,user)=>{
            
            if(error)
            return res.status(500).json({success:false, message: error.message})

            //clear the prev token 
            res.clearCookie("token")
            //screating the new token
            const newToken = jwt.sign({id: user.id},process.env.JWT_SECRET,{
                expiresIn:"30s",
            })
            //setting the new token 
            res.cookie("token",newToken,{
                path: "/",
                httponly:true,
                expiresIn: new Date(Date.now() + 1000*30),
                sameSite: "lax",
            })
            req.id = user.id;
            next()
        })


    } catch (error) {
        return res.status(500).json({success:false, message: error.message})
        
    }
}