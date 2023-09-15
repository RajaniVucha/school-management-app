// controllers/studentController.js

// Import the Student model 
const Student = require('../models/studentSchema');

// Create a function to get a list of all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
    console.log(students)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a function to create a new student
exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create functions for updating and deleting students as needed
