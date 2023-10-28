import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SchoolContext from "./SchoolContext";

const EditTeacher = (props) => {
  const { teacherId } = useParams();
  //console.log(teacherId);
  const [newTeacher, setNewTeacher] = useState({});
  const { getTeacherById, teacherData } = useContext(SchoolContext);
  const [teacher, setTeacher] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    address: "",
  });
  const navigate = useNavigate();

  const { setError } = useContext(SchoolContext);

  useEffect(() => {
    //get Teachers by grade
    getTeacherById(teacherId);
    console.log(teacherData);
    setTeacher(teacherData[0]);
    //console.log(teacher);
    //get teachers by grade
  }, [teacherId, getTeacherById, setTeacher, teacherData]);

  const handleChange = (e) => {
    // alert(e.target.value);
    const { name, value } = e.target;
    setNewTeacher({
      ...newTeacher,
      [name]: value,
    });
    console.log(newTeacher);
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

  //console.log(teacherData);
  const handleEdit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          `http://localhost:3000/teachers/${teacherId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeacher),
          }
        );

        if (response.ok) {
          if (response === null) {
            console.log("Could not find document");
            setError("Could not find document");
          } else {
            // Handle a successful response, e.g., display a success message
            console.log("Data updated successfully");
            setError("Teacher updated successfully");
          }
          // setEditPage("list");
        } else {
          // Handle errors, e.g., display an error message
          console.error("Error sending data");
          setError("Error sending data");
        }
      } catch (error) {
        console.error("Error:", error);
        setError(error);
      }
      navigate("/teachers");
    }
  };

  return (
    <div className="student-form">
      <h2>Edit Teacher</h2>
      <form name="teacherForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={teacher?.name}
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
            defaultValue={teacher?.fatherName}
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
            defaultValue={teacher?.phone}
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
            defaultValue={teacher?.email}
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
            defaultValue={teacher?.dateOfBirth}
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
            defaultValue={teacher?.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleEdit}>
          Edit Teacher
        </button>
      </form>
    </div>
  );
};

export default EditTeacher;
