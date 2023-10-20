import React, { useContext, useEffect } from "react";
import SchoolContext from "./SchoolContext";
import ViewMarks from "./ViewMarks";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const { grade, getStudentsByClass, studentData, handleSelect, isLoggedIn } =
    useContext(SchoolContext);
  const { error } = useContext(SchoolContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/reports");
    else navigate("/");
    //get students by grade
    getStudentsByClass(grade);
  }, [navigate, isLoggedIn, getStudentsByClass, grade]);

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
        <h5>Students Reports </h5>
      </div>
      <div className="error-msg">{error}</div>
      <div className="student-container">
        <form name="reportForm">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Telugu</th>
                <th>Hindi</th>
                <th>English</th>
                <th>Math</th>
                <th>Science</th>
                <th>Social</th>
                <th>Save</th>
                <th>View Report</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((item, index) => (
                <ViewMarks item={item} />
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Reports;
