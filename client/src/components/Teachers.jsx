import React from "react";
import TeacherList from "./TeacherList";
import { useEffect, useContext } from "react";
import SchoolContext from "./SchoolContext";

const Students = () => {
  const { fetchTeachersData } = useContext(SchoolContext);

  // Fetch student data from an API or database
  useEffect(() => {
    // Replace this with your data fetching logic
    // For example, fetch data using axios or fetch

    fetchTeachersData();
  });
  return <TeacherList />;
};

export default Students;
