import React from "react";
import TeacherList from "./TeacherList";
import { useEffect, useState } from "react";

const Students = () => {
  const [teacherData, setTeacherData] = useState([]);

  // Fetch student data from an API or database
  useEffect(() => {
    // Replace this with your data fetching logic
    // For example, fetch data using axios or fetch
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/teachers/");
        console.log(response);
        const data = await response.json();
        setTeacherData(data);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(teacherData);
  return <TeacherList page="list" />;
};

export default Students;
