// controllers/teacherController.js

// Import the teacher model
const Teacher = require("../models/teacherSchema");

// Create a function to get a list of all teachers
exports.getTeachers = async (req, res) => {
  try {
    //console.log(req.query);

    const teachers = await Teacher.find(req.query);

    // console.log(teachers);
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a function to create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const newteacher = new Teacher(req.body);
    await newteacher.save();
    res.json(newteacher);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create functions for updating and deleting teachers as needed
// Create a function to create a new student
exports.updateTeacher = async (req, res) => {
  try {
    console.log(req.params);
    const { _id } = req.params;
    var query = { _id: _id };
    const updatedData = req.body;
    console.log(updatedData);

    const teacher = await Teacher.findOneAndUpdate(query, updatedData);
    res.json(teacher);
    console.log(teacher);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create functions for updating and deleting students as needed
exports.deleteTeacher = async (req, res) => {
  try {
    const { _id } = req.params;
    var query = { _id: _id };
    console.log(_id);

    const teacher = await Teacher.deleteOne(query);
    res.json(teacher);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
