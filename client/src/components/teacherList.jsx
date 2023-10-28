import React, { useContext, useEffect } from "react";
import AddTeacher from "./AddTeacher";
import SchoolContext from "./SchoolContext";
import { useNavigate, Link } from "react-router-dom";

const TeacherList = () => {
  const { teacherData, setAddPage, addPage, isLoggedIn, setError, error } =
    useContext(SchoolContext);

  // console.log(addPage);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/teachers");
    else navigate("/");
  }, [navigate, isLoggedIn]);

  const handleClick = (e) => {
    e.preventDefault();
    setAddPage("add");
    // Add code to handle form submission (e.g., sending data to the server)
  };
  // console.log("Form submitted:", addPage);
  const handleDelete = async (_id) => {
    console.log(_id);
    try {
      const response = await fetch(`https://schoolcool-two.vercel.app/teachers/${_id}`, {
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
    navigate("/teachers");

    //console.log("Form submitted:", teacher);
  };
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
          <div className="error-msg">{error}</div>

          <div className="student-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Phone</th>
                  <th>Email Id</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {teacherData.map((item, index) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.fatherName}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.address}</td>
                    <td>
                      {" "}
                      <Link to={`/editteacher/${item._id}`}> Edit</Link>
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

export default TeacherList;
