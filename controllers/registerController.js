const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
app.use(bodyParser.json());
const User = require("../models/userSchema");
const saltRounds = 10;
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
  const { username, email, password } = req.body;
  console.log(username);
  // Check if the user already exists in your database (you may want to use unique constraints).
  const existingUser = await User.find({ username: username }).exec();

  console.log(existingUser.length);

  if (existingUser.length) {
    return res.status(400).json({ message: "Username already in use" });
  }
  try {
    // Hash the user's password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // Store the user's information in your database
    const user = {
      username,
      email,
      password: hash,
    };
    console.log(user);

    const newUser = new User(user);

    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ message: "Registration failed" });
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
