const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
app.use(bodyParser.json());
const User = require("../models/userSchema");
const secretKey = "schoolcool";
// Replace this with your actual database setup (e.g., using Mongoose for MongoDB).
// For simplicity, we'll use a simple in-memory array for storing users.
// Create a function to add student marks
exports.getUser = async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username (you'd typically query a database).
  const user = User.find(username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey,
    { expiresIn: "1h" }
  );

  // Attach the token to the request for use in protected routes
  req.token = token;
};

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("hello");
    // Check if the user already exists in your database (you may want to use unique constraints).
    const user = await User.findOne({ username: username }).exec();
    if (user != null) {
      passwordMatch = bcrypt.compareSync(password, user.password); // true
      console.log(passwordMatch);

      if (passwordMatch) {
        const token = jwt.sign(
          { userId: user.id, username: user.username },
          secretKey,
          { expiresIn: "1h" }
        );

        // Attach the token to the request for use in protected routes
        res.json({ token, user });
        console.log(token);
      }
    } else {
      console.log(error, "Invalid user");
      res.status(400).json({ message: "Invalid user" });
    }
  } catch (error) {
    console.log(error, "Invalid user");
    res.status(400).json({ message: "Invalid user" });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    var query = { _id: id };
    const updatedData = req.body;

    const user = await User.findOneAndUpdate(query, updatedData);
    res.json(user);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    var query = { _id: _id };

    const user = await Userser.deleteOne(query);
    res.json(user);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
