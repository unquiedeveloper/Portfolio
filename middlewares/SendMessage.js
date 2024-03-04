const {createTransport} = require("nodemailer")


const sendMessage = async (userMessage)=>{
 // imp things to know is create transport and sendmail
 //create transprt 
 const trasnporter = createTransport({
    service: "gmail",
    auth:{
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
    },


 })
 // sending the message 
 const sendMessage = await trasnporter.sendMail({
    from: process.env.APP_EMAIL,
    to: process.env.APP_EMAIL,
    subject: "New Message from POrtfolio site",
    text: userMessage
        

 })
 return sendMessage

}
module.exports = {sendMessage}