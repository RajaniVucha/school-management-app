// Import required dependencies
const express = require("express");
// Create an Express application
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// Define a port for your server
const port = process.env.PORT || 3000;

// Allow requests from localhost:3001
app.use(cors({ origin: "http://localhost:3001" }));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Import routes
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const reportRoutes = require("./routes/reportRoutes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");

// Mount student and teacher routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/reports", reportRoutes);
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);

app.get("/", (req, res) => {
  res.send("hello node");
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// create db connection
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://0.0.0.0:27017/school-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful database connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
