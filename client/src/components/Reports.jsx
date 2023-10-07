import React, { useState } from "react";

const Reports = () => {
  const [studentData, setStudentData] = useState([]);
  const [option, setOption] = useState();
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  console.log(studentData);
  console.log(option);
  return (
    <div>
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
        <h5>Students Reports</h5>
      </div>
      <div className="student-container">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Add Marks</th>
              <th>View Report</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>John Doe</td>
              <td>Add Marks</td>
              <td>View Report</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jane Smith</td>
              <td>Add Marks</td>
              <td>View Report</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
