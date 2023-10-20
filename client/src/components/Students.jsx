import React, { useContext } from "react";
import StudentList from "./StudentList";
import { useEffect } from "react";
import SchoolContext from "./SchoolContext";
const Students = () => {
  // Fetch student data from an API or database
  const { grade, getStudentsByClass } = useContext(SchoolContext);

  useEffect(() => {
    //get students by grade
    getStudentsByClass(grade);
  });

  return (
    <div>
      <StudentList page="list" grade="1" />
    </div>
  );
};

export default Students;
