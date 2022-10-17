const mongoose =require("mongoose")
const dotenv = require("dotenv").config()
const BD = process.env.BDURI
mongoose.Promise = global.Promise

const Database= mongoose.connect(BD,
 {useNewUrlParser:true},
 (err) => {
     if (!err) {
         console.log("mongodb connected")

     } else {
         console.log("failed to connected with mongodb" + err)
    }
 }

) 

module.exports=Database
