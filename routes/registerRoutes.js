// Import Express and create a Router
const express = require("express");
const router = express.Router();

// Import the studentController
const registerController = require("../controllers/registerController");

router.get("/", registerController.getUser);

router.post("/", registerController.addUser);
// Add routes for updating and deleting students
router.put("/:id", registerController.updateUser);
router.delete("/:_id", registerController.deleteUser);

// Export the router
module.exports = router;
