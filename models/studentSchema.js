const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

module.exports = mongoose.model("Student", studentSchema);
