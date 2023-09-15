const axios = require('axios');

// Define the URL of your API endpoint for students
const studentApiUrl = 'http://localhost:3000/students'; // Replace with your actual URL

// Function to get a list of students
async function getStudents() {
  try {
    const response = await axios.get(studentApiUrl);
    return response.data; // Returns an array of student objects
  } catch (error) {
    console.error('Error calling the student API:', error.message);
    throw error; // You can handle the error as needed
  }
}

// Example usage:
getStudents()
  .then((students) => {
    console.log('List of students:');
    console.log(students);
  })
  .catch((error) => {
    // Handle errors here
  });
