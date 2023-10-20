import React, { useState, useContext } from "react";
import SchoolContext from "./SchoolContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { validateRegistrationForm } = useContext(SchoolContext);
  const navigate = useNavigate();
  const { setError } = useContext(SchoolContext);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you would typically send the user data to the server for registration.
    // You can use a library like Axios to make API requests.

    // Send a POST request to the server
    if (validateRegistrationForm()) {
      console.log(user);
      // Make a POST request to your API endpoint
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response here
          console.log(data);
          setError("Registration successfull");

          navigate("/dashboard");
        })
        .catch((error) => {
          // Handle errors here
          setError(error);

          console.error("Error:", error);
        });

      // After a successful registration, you might want to clear the form.
      setUser({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="student-form">
      <h2>Register</h2>
      <form name="RegistrationForm" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
