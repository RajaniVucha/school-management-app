// Import required dependencies
const express = require('express');

// Create an Express application
const app = express();

// Define a port for your server
const port = process.env.PORT || 3000;

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

// Mount routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);