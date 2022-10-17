const emploiModel = require("../models/emploi_models");
const classModel = require("../models/classe_models");
const enseignantModel = require("../models/enseignant_models");
module.exports = {
  create: function (req, res) {
    const emploi = new emploiModel(req.body);

    emploi.save(req.body, function (err, item) {
      if (err) {
        res
          .status(404)
          .json({
            success: false,
            message: "created emploi failed" + err,
            data: null,
          });
        console.log(err);
      } else {
        enseignantModel.findByIdAndUpdate(
          req.body.enseignant,
          { $push: { emploi: emploi } },
          () => {
            emploi.populate("enseignant", () => {
              res
                .status(201)
                .json({
                  success: true,
                  message: "emploi created successfly",
                  data: item,
                });
            });
          }
        );
      }
    });
  },

  getAll: function (req, res) {
    emploiModel
      .find(function (err, items) {
        if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "cannot got all emploi" + err,
              data: null,
            });
          console.log(err);
        } else {
          res
            .status(201)
            .json({ success: true, message: "list of emploi", items });
        }
      })
      .populate({ path: "enseignant", model: "enseignants" });
  },
  getID: function (req, res) {
    emploiModel
      .findById(req.params.id)
      .populate({ path: "classe" })
      .populate()
      .populate({ path: "enseignant" })
      .populate()
      .exec(function (err, item) {
        if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "failed to get emploi by id",
              data: null,
            });
        } else {
          res
            .status(201)
            .json({ success: true, message: "emploi founded", data: item });
        }
      });
  },

  update: function (req, res) {
    emploiModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({
              success: false,
              message: "failed to update emploi",
              data: null,
            });
        } else {
          res
            .status(200)
            .json({
              success: true,
              message: "emploi update successfuly",
              data: item,
            });
        }
      }
    );
  },
  delete: function (req, res) {
    emploiModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({
            success: false,
            message: "failed to deleted emploi",
            data: null,
          });
      } else {
        res
          .status(201)
          .json({
            success: true,
            message: "emploi deleted successfuly",
            data: item,
          });
      }
    });
  },
};
