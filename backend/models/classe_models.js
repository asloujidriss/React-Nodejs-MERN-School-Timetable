const mongoose = require("mongoose")

const classeSchema = new mongoose.Schema({


niveau:{
    type:String,
    required:true,
    trim:true,    
},   
name:{
    type:String,
    required:true,
    trim:true,
},
section:{
    type:String,
    required:true,
    trim:true,
},
listEleves:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"eleves"
}],
Enseignant:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"enseignants"
}],
emploi:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"emplois"
},
})

module.exports= mongoose.model("classes", classeSchema)
