// Import Express and create a Router
const express = require('express');
const router = express.Router();

// Import the teacherController
const teacherController = require('./controllers/teacherController');

// Define routes for teachers
router.get('/teachers', teacherController.getTeachers);
router.post('/teachers', teacherController.createTeacher);
// Add routes for updating and deleting teachers

// Export the router
module.exports = router;
