import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SchoolContext from "./SchoolContext";

const EditMarks = (props) => {
  const { studentId } = useParams();
  //console.log(studentId);
  const [newReport, setNewReport] = useState({});
  const { getStudentById, studentData } = useContext(SchoolContext);
  const [reports, setReports] = useState({
    telugu: "",
    hindi: "",
    english: "",
    math: "",
    science: "",
    social: "",
    id: "",
    studentName: "",
    grade: "",
  });
  const navigate = useNavigate();
  const { setError } = useContext(SchoolContext);

  useEffect(() => {
    //get students by grade
    getStudentById(studentId);
    //get students by grade
    const getReportByStudent = async (studentId) => {
      // console.log(reports);
      //console.log(`http://localhost:3000/reports/?id=${studentId}`);
      try {
        const response = await fetch(
          `http://localhost:3000/reports/?id=${studentId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data[0]);

        if (data[0] === undefined) {
          Object.keys(reports).forEach((key) => (reports[key] = "NA"));
        } else setReports(data[0]);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    getReportByStudent(studentId);
  });
  const handleChange = (e) => {
    //alert(e.target.value);
    const { name, value } = e.target;
    setNewReport({
      ...newReport,
      [name]: value,
      id: studentId,
    });
    console.log(newReport);
  };
  //console.log(studentData);
  const handleEdit = async (e) => {
    e.preventDefault();

    console.log(newReport);
    try {
      const response = await fetch(
        `http://localhost:3000/reports/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReport),
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
          setError("Marks updated successfully");
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
    navigate("/reports");

    //console.log("Form submitted:", teacher);
  };
  return (
    <div className="student-form">
      <h2>Edit Student</h2>
      <form name="marksForm">
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            defaultValue={reports?.studentName}
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
            defaultValue={reports?.grade}
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
            defaultValue={reports.telugu}
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
            defaultValue={reports.hindi}
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
            defaultValue={reports.english}
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
            defaultValue={reports.math}
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
            defaultValue={reports.science}
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
            defaultValue={reports.social}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditMarks;
