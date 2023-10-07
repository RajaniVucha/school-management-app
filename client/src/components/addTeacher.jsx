import React, { useState } from "react";
const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };
  const validateForm = () => {
    var name = document.forms["teacherForm"]["name"].value;
    var fatherName = document.forms["teacherForm"]["fatherName"].value;
    var phone = document.forms["teacherForm"]["phone"].value;
    var email = document.forms["teacherForm"]["email"].value;
    var address = document.forms["teacherForm"]["address"].value;

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

    // Phone number validation (simple format XXX-XXX-XXXX)
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone.match(phonePattern)) {
      alert("Invalid phone number. Please use the format XXX-XXX-XXXX.");
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add code to handle form submission (e.g., sending data to the server)
      try {
        const response = await fetch("http://localhost:3000/teachers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacher),
        });

        if (response.ok) {
          // Handle a successful response, e.g., display a success message
          console.log("Data sent successfully");
        } else {
          // Handle errors, e.g., display an error message
          console.error("Error sending data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      console.log("Form submitted:", teacher);
    }
  };

  return (
    <div className="student-form">
      <h2>Add Teacher</h2>
      <form name="teacherForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teacher.name}
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
            value={teacher.fatherName}
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
            value={teacher.phone}
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
            value={teacher.email}
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
            value={teacher.dateOfBirth}
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
            value={teacher.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
