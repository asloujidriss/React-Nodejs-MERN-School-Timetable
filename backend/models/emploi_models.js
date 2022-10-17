const mongoose = require("mongoose");
const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  niveau: {
    type: String,
    trim: true,
  },
  section: {
    type: String,
    trim: true,
  },
});
const emploiSchema = new mongoose.Schema({
  AnneeScolaire: {
    type: String,
    trim: true,
  },
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "enseignants",
  },
  classe: [ClassSchema],
});

module.exports = mongoose.model("emplois", emploiSchema);
