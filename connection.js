const mongoose = require("mongoose");
const connectDB = async()=>{
    const connection = await mongoose.connect(process.env.MONGO_URI)
    if(connection.STATES.disconnected){
        console.log("DB connection failed");
    } else{
        console.log("cnnection successful");
    }
}


module.exports = {connectDB}