// Import Express and create a Router
const express = require("express");
const router = express.Router();

// Import the studentController
const studentController = require("../controllers/studentController");

// Define routes for students
router.get("/", studentController.getStudents);
router.put("/:_id", studentController.updateStudent);
router.delete("/:_id", studentController.deleteStudent);

router.post("/", studentController.createStudent);
// Add routes for updating and deleting students

// Export the router
module.exports = router;
