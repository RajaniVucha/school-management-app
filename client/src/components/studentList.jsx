import React, { useState, useContext } from "react";
import AddStudent from "./AddStudent";
import SchoolContext from "./SchoolContext";

const StudentList = (props) => {
  const [addPage, setAddPage] = useState(props.page);
  console.log(addPage);
  const { studentData } = useContext(SchoolContext);
  const handleClick = (e) => {
    e.preventDefault();
    setAddPage("add");
    // Add code to handle form submission (e.g., sending data to the server)
  };
  console.log("Form submitted:", addPage, studentData);

  return (
    <div>
      {addPage === "add" ? (
        <AddStudent addPage={addPage} />
      ) : (
        <>
          <div className="title">
            <h5>Students List</h5>
          </div>

          <div className="button-rgt-position">
            <button className="button" onClick={handleClick}>
              Add Student
            </button>
          </div>
          <div className="student-container">
            <table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Phone</th>
                  <th>Email Id</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((item, index) => (
                  <tr>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.fatherName}</td>
                    <td>{item.motherName}</td>

                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.address}</td>
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
