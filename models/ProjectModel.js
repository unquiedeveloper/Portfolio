const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name : String,
    desc:String,
    img:String,  // img= secure_url froom cloudinar
    githubUrl:String,
    hostedUrl:String,
    publicId: String, // public = public_Id from cloudainary
    deletedToken: String,

},{timestamps:true})




module.exports = mongoose.model("Project",ProjectSchema)