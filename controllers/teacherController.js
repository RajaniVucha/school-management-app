// controllers/teacherController.js

// Import the teacher model 
const teacher = require('../models/teacher');

// Create a function to get a list of all teachers
exports.getteachers = async (req, res) => {
  try {
    const teachers = await teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a function to create a new teacher
exports.createteacher = async (req, res) => {
  try {
    const newteacher = new teacher(req.body);
    await newteacher.save();
    res.json(newteacher);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create functions for updating and deleting teachers as needed
