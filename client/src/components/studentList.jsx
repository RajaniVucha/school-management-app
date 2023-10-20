import React, { useContext, useEffect } from "react";
import AddStudent from "./AddStudent";
import SchoolContext from "./SchoolContext";
import { Link, useNavigate } from "react-router-dom";

const StudentList = (props) => {
  const {
    studentData,
    addPage,
    handleClick,
    handleSelect,
    setError,
    isLoggedIn,
    error,
  } = useContext(SchoolContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/students");
    else navigate("/");
  }, [navigate, isLoggedIn]);

  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const response = await fetch(`http://localhost:3000/students/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle a successful response, e.g., display a success message
        console.log("Data deleted successfully");
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
    navigate("/students");

    //console.log("Form submitted:", teacher);
  };
  return (
    <div>
      {addPage === "add" ? (
        <AddStudent />
      ) : (
        <>
          <div>
            <form name="selectForm">
              <div className="select-box">
                <div>
                  <label for="class">Select a Class:&nbsp;&nbsp;</label>{" "}
                </div>
                <div>
                  <select name="class" id="class" onChange={handleSelect}>
                    <option value="1">class 1</option>
                    <option value="2">class 2</option>
                    <option value="3">class 3</option>
                    <option value="4">class 4</option>
                    <option value="5">class 5</option>
                    <option value="6">class 6</option>
                    <option value="7">class 7</option>
                    <option value="8">class 8</option>
                    <option value="9">class 9</option>
                    <option value="10">class 10</option>
                  </select>
                </div>
              </div>
            </form>
          </div>{" "}
          <div className="title">
            <h5>Students List</h5>
          </div>
          <div className="button-rgt-position">
            <button className="button" onClick={handleClick}>
              Add Student
            </button>
          </div>
          <div className="error-msg">{error}</div>
          <div className="student-container">
            <table>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Phone</th>
                  <th>Email Id</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.fatherName}</td>
                    <td>{item.motherName}</td>

                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.address}</td>
                    <td>
                      {" "}
                      <Link to={`/editstudent/${item._id}`}> Edit</Link>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        className="report-button"
                        onClick={() => handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentList;
