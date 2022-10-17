const eleveModel = require("../models/élève_models")
const classModel = require("../models/classe_models")
module.exports = {
    create:  function (req,res) {

        const eleve= new eleveModel(req.body)
        console.log(eleve)
      
         eleve.save(req.body, function(err, item) {
            if (err) {
                res.status(404).json({ success: false, message: "created eleve failed"+err, data: null })
                
            } else {
                classModel.findByIdAndUpdate(req.body.classe,        

                    {$push:{listEleves:eleve}},()=>{
         eleve.populate("classe",()=>{
             res.status(201).json({ success: true, message: "eleve created successfly", data:item })
         })
                    }
                    )
            }}
        ) 
    }, 
    getAll: function (req, res) {
        eleveModel.find(function (err, items) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got all eleves"+err, data: null })
                console.log(err)
            } else {
                res.status(201).json({ success: true, message: "list of eleves", data: items })
            }
        }).populate("classe")
    },
    getID: function (req, res) {
        const id =req.params.id;
        eleveModel.findById(id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to get eleve by id", data: null })
            } else {
                res.status(201).json({ success: true, message: "eleve founded", data: item })
            }
        })
    },

    update: function (req, res) {
        eleveModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to update eleve", data: null })
            } else {
                res.status(200).json({ success: true, message: "eleve update successfuly", data: item })
            }
        })
    },

    delete: function (req, res) {
        eleveModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to deleted eleve", data: null })
            } else {
                res.status(201).json({ success: true, message: "eleve deleted successfuly", data: item })
            }
        })
    }
};
