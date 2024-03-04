const { sendMessage } = require("../middlewares/SendMessage");

exports.contact = async(req,res)=>{
    try {
        const {name ,email , message } = req.body;
        const userMessage = `Name : ${name}\nEmail: ${email}\nMessafe: ${message}`;
        const sendMessage = await sendMessage(userMessage)
        if(!sendMessage) return res.status(404).json({success: false, message:"Message not sent"})
        return res.status(200).json({success:true, message:"msg send successfully"})
    } catch (error) {
        return res.status(500).json({success:false, message: error.message})
    }
}