// Import Express and create a Router
const express = require("express");
const router = express.Router();

// Import the studentController
const loginController = require("../controllers/loginController");

router.get("/", loginController.getUser);

router.post("/", loginController.addUser);
// Add routes for updating and deleting students
router.put("/:id", loginController.updateUser);
router.delete("/:_id", loginController.deleteUser);

// Export the router
module.exports = router;
