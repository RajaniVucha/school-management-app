import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SchoolContext from "./SchoolContext";

const AddMarks = (props) => {
  const { studentId } = useParams();
  const { getStudentById, studentData } = useContext(SchoolContext);
  const [reports, setReports] = useState({
    telugu: "",
    hindi: "",
    engish: "",
    math: "",
    science: "",
    social: "",
    id: "",
    studentName: studentData[0]?.name,
    grade: studentData[0]?.grade,
  });
  const navigate = useNavigate();
  const { setError } = useContext(SchoolContext);

  //get students by grade
  getStudentById(studentId);

  const handleChange = (e) => {
    //alert(e.target.value);
    const { name, value } = e.target;
    setReports({
      ...reports,
      [name]: value,
      id: studentId,
      studentName: studentData[0]?.name,
      grade: studentData[0]?.grade,
    });
    //console.log(reports);
  };
  //console.log(studentData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const response = await fetch("https://schoolcool-two.vercel.app/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reports),
      });

      if (response.ok) {
        // Handle a successful response, e.g., display a success message
        console.log("Data sent successfully");
        setError("Marks added successfully");
      } else {
        // Handle errors, e.g., display an error message
        console.error("Error sending data");
        setError("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    }
    navigate("/reports");

    //console.log("Form submitted:", teacher);
  };
  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <form name="marksForm">
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentData[0]?.name}
            disabled={true}
            className="input-field"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={studentData[0]?.grade}
            disabled={true}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="telugu">Telugu:</label>
          <input
            type="text"
            id="telugu"
            name="telugu"
            value={reports.telugu}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="hindi">Hindi:</label>
          <input
            type="text"
            id="hindi"
            name="hindi"
            value={reports.hindi}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="english">English:</label>
          <input
            type="text"
            id="english"
            name="english"
            value={reports.english}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="math">Math:</label>
          <input
            type="text"
            id="math"
            name="math"
            value={reports.math}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="science">Science:</label>
          <input
            type="text"
            id="science"
            name="science"
            value={reports.science}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="social">Social:</label>
          <input
            type="address"
            id="social"
            name="social"
            value={reports.social}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMarks;
