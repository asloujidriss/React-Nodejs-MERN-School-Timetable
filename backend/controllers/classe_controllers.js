const classModel = require("../models/classe_models")
const eleveModel = require("../models/élève_models")
const ensiegnantModel = require("../models/enseignant_models")
module.exports = {
    create: function (req,res) {
       
        const Classe= new classModel(req.body)
     
        Classe.save(req.body, function (err, item) {
           
            if (err) {
                res.status(404).json({ success: false, message: "creates classe failed", data: null })
                console.log(err)
            }else {
                eleveModel.findByIdAndUpdate(req.body.listEleves,
                   {$push:{classe:Classe}},()=>{
          Classe.populate("listEleves",()=>{
           ensiegnantModel.findByIdAndUpdate(req.body.Enseignant,
               {$push:{liste_classe:Classe}},()=>{

                   res.status(201).json({ success: true, message: "classe created successfly", data: item })
               }
               
               )


})
                   }
                   )
           }
        })
    },
    
    getAll: function (req, res) {
        classModel.find(function (err, items) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got all classe ", data: null })
                console.log(err)
            } else {
                res.status(201).json({ success: true, message: "list of classe", data: items })
            }
        }).populate({path:"listEleves" , model:"eleves"}).populate ({path:"Enseignant",model:"enseignants"})
    },
    getID: function (req, res) {
        const id = req.params.id;
        classModel.findById(id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to get classe by id", data: null })
            } else {
                res.status(201).json({ success: true, message: "classe founded", data: item })
            }
        }).populate({path:"listEleves" , model:"eleves"}).populate ({path:"Enseignant",model:"enseignants"})
    
    },
    getbysection: function (req, res) {
        const section = req.params.section
        classModel.find({section}, function (err, items) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got classe by this section", data: null })
            } else {
                res.status(201).json({ success: true, message: "list of classe", data: items })
            }
        })
    },
    update: function (req, res) {
        classModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to update eleve", data: null })
            } else {
                res.status(200).json({ success: true, message: "eleve update successfuly", data: item })
            }
        })
    },
    delete: function (req, res) {
        classModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to deleted classe", data: null })
            } else {
                res.status(201).json({ success: true, message: "classe deleted successfuly", data: item })
            }
        })
    }
};


