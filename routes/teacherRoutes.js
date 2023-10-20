// Import Express and create a Router
const express = require("express");
const router = express.Router();

// Import the teacherController
const teacherController = require("../controllers/teacherController");

// Define routes for teachers
router.get("/", teacherController.getTeachers);
router.post("/", teacherController.createTeacher);
router.put("/:_id", teacherController.updateTeacher);
router.delete("/:_id", teacherController.deleteTeacher);

// Add routes for updating and deleting teachers

// Export the router
module.exports = router;
