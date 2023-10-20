const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },

  studentName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  telugu: {
    type: String,
    required: true,
  },
  hindi: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
  math: {
    type: String,
    required: true,
  },
  science: {
    type: Number,
    required: true,
  },
  social: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model("report", reportSchema);
