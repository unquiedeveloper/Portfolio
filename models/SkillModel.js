const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    skill:{
        type:String,
        require:true,
    },
    level:{
        type:Number,
    },

},{timestamps:true})


module.exports = mongoose.model("Skill", SkillSchema)