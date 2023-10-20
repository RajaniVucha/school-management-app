import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  const [student, setStudent] = useState([]);
  const [grade, setGrade] = useState(1);
  const [addPage, setAddPage] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const [teacher, setTeacher] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    address: "",
  });
  const [error, setError] = useState("");
  const validatePassword = (password) => {
    // Define the password criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    // Check if the password meets all criteria
    if (
      password.length < minLength ||
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      return false;
    }

    return true;
  };

  const validateRegistrationForm = () => {
    var username = document.forms["RegistrationForm"]["username"].value;
    var email = document.forms["RegistrationForm"]["email"].value;
    var password = document.forms["RegistrationForm"]["password"].value;
    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.match(namePattern)) {
      alert("Invalid name");
      return false;
    }
    if (!email.match(emailPattern)) {
      alert("Invalid email address.");
      return false;
    }

    if (!validatePassword(password)) {
      alert("Invalid password.");
      return false;
    }
    return true;
  };
  const validateLoginForm = () => {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    var namePattern = /^[A-Za-z\s]+$/;

    if (!username.match(namePattern)) {
      alert("Invalid name");
      return false;
    }

    if (!validatePassword(password)) {
      alert("Invalid password.");
      return false;
    }
    return true;
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (validateLoginForm()) {
      console.log(user);
      // Make a POST request to your API endpoint
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response here
          console.log(data.message);
          if (data.message === "Invalid user") {
            setError("Invalid user");

            setIsLoggedIn(false);
          } else {
            const token = data.token; // Replace with your actual token
            setUser({
              username: data?.user?.username,
              email: data?.user?.email,
            });
            localStorage.setItem("token", token);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          // Handle errors here
          setError(error);

          console.error("Error:", error);
        });
    }
  };

  //  console.log(addPage);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("hello");

    setAddPage("add");

    // Add code to handle form submission (e.g., sending data to the server)
  };
  //select grade
  const handleSelect = (e) => {
    setGrade(e.target.value);
    setError("");
    //console.log(grade);
  };
  //fetch student by grade details
  const getStudentsByClass = async (grade) => {
    try {
      const response = await fetch(
        `http://localhost:3000/students/?grade=${grade}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Log the data from the response
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  //fetch student by Id details
  const getStudentById = async (studentId) => {
    //console.log(studentId);
    // console.log(`http://localhost:3000/students/?_id=${studentId}`);
    try {
      const response = await fetch(
        `http://localhost:3000/students/?_id=${studentId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Log the data from the response
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  //fetch student by Id details
  const getTeacherById = async (teacherId) => {
    //console.log(studentId);
    //console.log(`http://localhost:3000/teachers/?_id=${teacherId}`);
    try {
      const response = await fetch(
        `http://localhost:3000/teachers/?_id=${teacherId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Log the data from the response
      setTeacher(data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  //fetch teachers data
  const fetchTeachersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/teachers/");
      // console.log(response);
      const data = await response.json();
      setTeacherData(data);
      //console.log(teacherData);
    } catch (error) {
      console.error("Error fetching teacher data:", error);
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
        addPage,
        setAddPage,
        handleClick,
        teacherData,
        setTeacherData,
        fetchTeachersData,
        teacher,
        setTeacher,
        getStudentById,
        error,
        setError,
        handleLoginSubmit,
        handleInputChange,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        validateRegistrationForm,
        validateLoginForm,
        getTeacherById,
      }}>
      {children}
    </SchoolContext.Provider>
  );
};
export default SchoolContext;
