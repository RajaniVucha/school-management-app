// Import required dependencies
const express = require('express');

// Create an Express application
const app = express();

// Define a port for your server
const port = process.env.PORT || 3000;

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

// Mount student and teacher routes
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
  

app.get('/',(req,res)=>{
    res.send("hello node")
})
  // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


// create db connection
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/school-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




