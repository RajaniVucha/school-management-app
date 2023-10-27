import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SchoolContext from "./SchoolContext";

const EditStudent = (props) => {
  const { studentId } = useParams();
  //console.log(studentId);
  const [newStudent, setNewStudent] = useState({});
  const { getStudentById, studentData } = useContext(SchoolContext);
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    address: "",

    dateOfBirth: "",
    grade: "",
  });
  const navigate = useNavigate();
  const { setError } = useContext(SchoolContext);

  useEffect(() => {
    //get students by grade
    getStudentById(studentId);
    setStudent(studentData[0]);

    //get students by grade
  }, [studentId, studentData, getStudentById]);
  //console.log(student);
  const handleChange = (e) => {
    // alert(e.target.value);
    const { name, value } = e.target;
    setStudent({
      ...newStudent,
      [name]: value,
    });
    console.log(student);
  };
  //console.log(studentData);
  const handleEdit = async (e) => {
    e.preventDefault();
    // console.log(student);

    //// console.log(`http://localhost:3000/students/${studentId}`);
    try {
      const response = await fetch(
        `http://localhost:3000/students/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      );
      console.log(response);
      if (response.ok) {
        if (response === null) {
          console.log("Could not find document");
          setError("Could not find document");
        } else {
          // Handle a successful response, e.g., display a success message
          console.log("Data updated successfully");
          setError("Student updated successfully");
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
    navigate("/students");

    //console.log("Form submitted:", teacher);
  };
  return (
    <div className="student-form">
      <h2>Edit Student</h2>
      <form name="studentForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={student.name}
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
            defaultValue={student.fatherName}
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
            defaultValue={student.motherName}
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
            defaultValue={student.phone}
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
            defaultValue={student.email}
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
            defaultValue={student.dateOfBirth}
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
            defaultValue={student.grade}
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
            defaultValue={student.address}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleEdit}>
          Edit Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
