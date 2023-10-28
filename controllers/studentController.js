// controllers/studentController.js
const maxDuration = 300;

// Import the Student model
const Student = require("../models/studentSchema");
// Create a function to get a list of all students
exports.getStudents = async (req, res) => {
  try {
    ///console.log(req.query);

    const students = await Student.find(req.query).limit(5).exec();

    res.json(students);
    //console.log(students);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a function to create a new student
exports.createStudent = async (req, res) => {
  try {
    console.log(req.body);
    const newStudent = new Student(req.body);

    console.log(newStudent);
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a function to create a new student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const updatedData = req.body;
    console.log(updatedData);

    const student = await Student.findOneAndUpdate(req.params, updatedData);
    res.json(student);
    console.log(student);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create functions for updating and deleting students as needed
exports.deleteStudent = async (req, res) => {
  try {
    console.log("student");
    const { _id } = req.params;
    var query = { _id: _id };
    console.log(_id);

    const student = await Student.deleteOne(query);
    res.json(student);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
