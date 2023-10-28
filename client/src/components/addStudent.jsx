import React, { useContext } from "react";
import SchoolContext from "./SchoolContext";

const AddStudent = () => {
  const { student, setStudent, setAddPage } = useContext(SchoolContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const validateForm = () => {
    var name = document.forms["studentForm"]["name"].value;
    var fatherName = document.forms["studentForm"]["fatherName"].value;
    var motherName = document.forms["studentForm"]["motherName"].value;
    var phone = document.forms["studentForm"]["phone"].value;
    var grade = document.forms["studentForm"]["grade"].value;

    var email = document.forms["studentForm"]["email"].value;
    var address = document.forms["studentForm"]["address"].value;

    // Name validation (only alphabetic characters and spaces allowed)
    var namePattern = /^[A-Za-z\s]+$/;
    if (!name.match(namePattern)) {
      alert("Invalid name");
      return false;
    }
    if (!fatherName.match(namePattern)) {
      alert(
        "Invalid Father Name. Please use only alphabetic characters and spaces."
      );
      return false;
    }
    if (!motherName.match(namePattern)) {
      alert(
        "Invalid Mother name. Please use only alphabetic characters and spaces."
      );
      return false;
    }
    // Phone number validation (simple format XXX-XXX-XXXX)
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone.match(phonePattern)) {
      alert("Invalid phone number. Please use the format XXX-XXX-XXXX.");
      return false;
    }

    // grade number validation (simple format XXX-XXX-XXXX)
    var gradePattern = /^\d{1}$/;
    if (!grade.match(gradePattern)) {
      alert("Invalid grade");
      return false;
    }
    // Email validation (basic format checking)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("Invalid email address.");
      return false;
    }

    // Address validation (any non-empty string is considered valid)
    if (address.trim() === "") {
      alert("Please enter a valid address.");
      return false;
    }

    // All validations passed
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add code to handle form submission (e.g., sending data to the server)

      console.log(student);
      // Make a POST request to your API endpoint
      fetch("https://schoolcool-two.vercel.app/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response here
          console.log(data);
          setAddPage("list");
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
      console.log("Form submitted:", student);
    }
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form name="studentForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="fatherName">Father Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={student.fatherName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="motherName">Mother Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={student.motherName}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date Of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="address"
            id="address"
            name="address"
            value={student.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
