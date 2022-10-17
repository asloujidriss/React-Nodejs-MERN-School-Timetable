const mongoose = require ("mongoose")
const validator =require ("validator")

const bcrypt=require("bcrypt")

const baseOptions = {
    discriminatorKey: 'itemtype',
    collection: 'users'
}


const UserSchema = mongoose.Schema({
    nom:{
        type: String,
        required:true,
    },
    prenom:{
        type: String,
        required:true,
    },
    numero_tel:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        required:true,
        validate:[validator.isEmail,"please entre a valid email"]
    },
    password:{
        type:String,
        required:true,
        maxlength:[12,"password should be at least 12 characters"],
        minlength:[8,"password should more then 8 characters"]
    },
    role:{
        type:String,
        enum:['sup_admin', 'user','enseignant'],
        default:'user',
    }
  
});

UserSchema.pre("save",function(next){
    this.password= bcrypt.hashSync(this.password, 10)
    next()
})

module.exports= mongoose.model('users',UserSchema)