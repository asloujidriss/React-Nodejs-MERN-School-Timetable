const mongoose = require("mongoose")
const userModel=require("./user_models")

const enseignantSchema = new mongoose.Schema({
   
    description:{
        type: String,
        required:true,
    },
    matières:{
        type: String,
        required:true,
    },
    emploi:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"emplois"
    },
    absence:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"absences"
    } ,
    liste_classe:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"classes"
    }] ,
   
})
const enseignants = userModel.discriminator("enseignants",enseignantSchema)
module.exports= mongoose.model("enseignants")
