import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SchoolContext from "./SchoolContext";

const ViewMarks = (props) => {
  const { setError } = useContext(SchoolContext);

  const [reports, setReports] = useState({
    _id: "",
    telugu: "",
    hindi: "",
    english: "",
    math: "",
    science: "",
    social: "",
    id: "",
    name: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    //get students by grade
    const getReportByStudent = async (id) => {
      // console.log(reports);
      //console.log(id);
      //console.log(`http://localhost:3000/reports/?id=${id}`);
      try {
        const response = await fetch(
          `http://localhost:3000/reports/?id=${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
          // eslint-disable-next-line no-unreachable
          setError("Http! error");
        }

        const data = await response.json();
        console.log(data[0]);

        if (data[0] === undefined) {
          Object.keys(reports).forEach((key) => (reports[key] = "NA"));
          console.log(reports);
        } else {
          setReports(data[0]);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    getReportByStudent(props.item._id);
  });
  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const response = await fetch(`http://localhost:3000/reports/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle a successful response, e.g., display a success message
        console.log("Data deleted successfully");
        navigate("/reports");
        setError("Data deleted successfully");

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
    //console.log("Form submitted:", teacher);
  };
  return (
    <>
      <tr>
        <td>{props.item.name}</td>
        <td>{reports?.telugu}</td>
        <td>{reports?.hindi}</td> <td>{reports?.english}</td>{" "}
        <td>{reports?.math}</td> <td>{reports?.science}</td>{" "}
        <td>{reports?.social}</td>{" "}
        <td>
          {" "}
          <Link to={`/addmarks/${props.item._id}`}> Add</Link>
        </td>
        <td>
          {" "}
          <Link to={`/editmarks/${props.item._id}`}> Edit</Link>
        </td>
        <td>
          {" "}
          <button
            type="button"
            className="report-button"
            onClick={() => handleDelete(reports._id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ViewMarks;
