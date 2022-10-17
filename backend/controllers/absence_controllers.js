const absenceModel = require("../models/absence_models")

module.exports = {
    create: function (req,res) {
       
        const absence= new absenceModel(req.body)
     
        absence.save(req.body, function (err, item) {
           
            if (err) {
                res.status(404).json({ success: false, message: "creates absence faide", data: null })
                console.log(err)
            } else {
                res.status(201).json({ success: true, message: "absence created successfly", data: item })
            }
        })

    },

    getAll: function (req, res) {
        absenceModel.find(function (err, items) {
            if (err) {
                res.status(406).json({ success: false, message: "cannot got all absence ", data: null })
                console.log(err)
            } else {
                res.status(201).json({ success: true, message: "list of absence", data: items })
            }
        })
    },
    delete: function (req, res) {
        absenceModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ success: false, message: "failed to deleted absence", data: null })
            } else {
                res.status(201).json({ success: true, message: "absence deleted successfuly", data: item })
            }
        })
    }
}
