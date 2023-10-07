// controllers/studentController.js

// Import the Student model
const Student = require("../models/studentSchema");

// Create a function to get a list of all students
exports.getStudents = async (req, res) => {
  try {
    const { grade } = req.query;
    var query = { grade: grade };
    const students = await Student.find(query).exec();
    res.json(students);
    //console.log(grade);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a function to create a new student
exports.createStudent = async (req, res) => {
  try {
    //console.log(req.body);
    const newStudent = new Student(req.body);

    console.log(newStudent);
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create functions for updating and deleting students as needed
