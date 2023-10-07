import React, { useState } from "react";
import AddTeacher from "./AddTeacher";
const TeacherList = (props) => {
  const [addPage, setAddPage] = useState(props.page);
  console.log(addPage);

  const handleClick = (e) => {
    e.preventDefault();
    setAddPage("add");
    // Add code to handle form submission (e.g., sending data to the server)
  };
  console.log("Form submitted:", addPage);

  return (
    <div>
      {addPage === "add" ? (
        <AddTeacher />
      ) : (
        <>
          <div className="title">
            <h5>Teachers List</h5>
          </div>
          <div className="button-rgt-position">
            <button className="button" onClick={handleClick}>
              Add Teacher
            </button>
          </div>
          <div className="student-container">
            <table>
              <thead>
                <tr>
                  <th>Teacher ID</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Date of Birth</th>
                  <th>Mobile Number</th>
                  <th>Email Id</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>John Doe</td>
                  <td>John Doe</td>
                  <td>01/05/2009</td>

                  <td>9676022217</td>
                  <td>rajani.vucha@gmail.com</td>
                  <td>9676022217</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Jane Smith</td>
                  <td>John Doe</td>
                  <td>01/05/2009</td>

                  <td>9676022217</td>
                  <td>rajani.vucha@gmail.com</td>
                  <td>9676022217</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherList;
