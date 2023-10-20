// Import Express and create a Router
const express = require("express");
const router = express.Router();

// Import the studentController
const reportController = require("../controllers/reportController");

router.get("/", reportController.getReport);

router.post("/", reportController.addMarks);
// Add routes for updating and deleting students
router.put("/:id", reportController.updateReport);
router.delete("/:_id", reportController.deleteReport);

// Export the router
module.exports = router;
