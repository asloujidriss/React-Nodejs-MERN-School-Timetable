const ensiegnantModel= require ('../models/enseignant_models')
const bcrybt = require("bcrypt")
const eleveModel = require ("../models/élève_models")
const classeModel = require ("../models/classe_models")

module.exports={
 register:function(req,res){
        const enseignant= new ensiegnantModel(req.body)
        enseignant.save(req.body, function (err, item) {
            if (err) {
                res.status(404).json({ success: false, message: "created prof faide" +err, data: null })     
            } else {
                // for i in liste_classe {
                // }
                classeModel.findByIdAndUpdate(req.body.liste_classe,
                   {$push:{Enseignant:enseignant}},()=>{
                    enseignant.populate("liste_classe",()=>{
                        res.status(201).json({ success: true, message: "prof created successfly", data: item })
                    })             
                   } )
            }
        })

    },

getAll: function (req, res) {
    ensiegnantModel.find(function (err, items) {
        if (err) {
            res.status(406).json({ success: false, message: "cannot got all enseiganat ", data: null })
            console.log(err)
        } else {
            res.status(201).json({ success: true, message: "list of classe", data: items })
        }
    })
},
getID: function (req, res) {
   
    ensiegnantModel.findById(req.params.id).populate({path:"emploi",populate:"classe"}).populate().populate({path:"liste_classe"}).populate().exec(function (err, item) {
       
        if (err) {
            res.status(406).json({ success: false, message: "failed to get enseignant by id", data: null })
        } else {
            res.status(201).json({ success: true, message: "enseignant founded byId", data: item })
        }
    })
},
update:function(req,res){
    const id =req.params.id
    const body = req.body
    ensiegnantModel.findByIdAndUpdate(id,body,{new:true},function(err,item){
        if (err) 
        {res.status(406).json({success:false,message:"failed to update enseignant",data:null})
            
        } else {
        res.status(201).json({success:true,message:"enseignanat updated successfuly",data:item})
        }
    })
},

delete: function (req, res) {
    ensiegnantModel.findByIdAndDelete(req.params.id, function (err, item) {
        if (err) {
            res.status(406).json({ success: false, message: "failed to deleted enseignant", data: null })
        } else {
            res.status(201).json({ success: true, message: "enseignant deleted successfuly", data: item })
        }
    })
}
};
      
