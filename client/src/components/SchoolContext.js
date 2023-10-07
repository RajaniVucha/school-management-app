import { createContext, useState } from "react";

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  const [student, setStudent] = useState([]);
  const [grade, setGrade] = useState(1);

  //select grade
  const handleSelect = (e) => {
    setGrade(e.target.value);
    //console.log(grade);
  };
  //fetch student details
  const getStudentsByClass = async (grade) => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      const response = await fetch(
        `http://localhost:3000/students/?grade=${grade}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        { signal }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Log the data from the response
      setStudentData(data);
      controller.abort();
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  return (
    <SchoolContext.Provider
      value={{
        studentData,
        setStudentData,
        student,
        setStudent,
        handleSelect,
        grade,
        setGrade,
        getStudentsByClass,
      }}>
      {children}
    </SchoolContext.Provider>
  );
};
export default SchoolContext;
