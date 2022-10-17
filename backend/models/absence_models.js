const mongoose = require("mongoose")

const absenceSchema = new mongoose.Schema({
date_absence:{
    type:Date,
    required:true,
    trim:true,    
},   
type:{
    type:String,
    required:true,
    trim:true,
},
description:{
    type:String,
    required:true,
    trim:true,
},
idEleves:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"eleves"
}],
idEnseigant:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"enseigants"
}]

})

module.exports= mongoose.model("absences", absenceSchema)