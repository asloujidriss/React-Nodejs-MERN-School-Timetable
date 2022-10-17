const express = require ("express")
const app = express()
const dotenv= require("dotenv")
require ('dotenv').config()
const cors =require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("tiny"))


var corsOption={
    origin:"http://localhost:3000",
    OptionsSuccessStatus:200
    
}
app.use(cors("corsOption"))

//databse config
const databse = require ("./config/database")


// Routes

//user
app.use('/user',require('./routes/user_routes'))

//enseignant
app.use('/enseignant',require('./routes/enseignant_routes'))

//classe
app.use('/classe',require('./routes/classe_routes'))

//élève
app.use('/eleve',require('./routes/élève_routes'))

//absence
app.use('/absence',require('./routes/absence_routes'))

//emploi
app.use('/emploi',require('./routes/emploi_routes'))


//server config
const PORT = process.env.PORT
app.listen(process.env.PORT, (err)=> 
err 
 ? console.log(err)
 :console.log(`server is running on localhost:${process.env.PORT}`)) 