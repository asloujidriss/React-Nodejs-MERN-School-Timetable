const mongoose = require("mongoose")

const eleveSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,
},
prenom:{
    type:String,
    required:true,
    trim:true,
},

classe:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"classes"
},
absence:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"absences"
}]

})

module.exports= mongoose.model("eleves", eleveSchema)
