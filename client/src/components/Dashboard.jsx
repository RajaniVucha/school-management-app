import React, { useEffect, useContext } from "react";
import SchoolContext from "./SchoolContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn, user } = useContext(SchoolContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(token);
    if (isLoggedIn) navigate("/dashboard");
    else navigate("/");
  }, [navigate, isLoggedIn, token]);
  return (
    <div>
      <div className="title">
        <h5>Welcome To Dashboard</h5>
      </div>
      <div className="student-form">
        <p>Name: &nbsp;{user.username}</p>
        <p>Role: Admin</p>
        <p>Email:&nbsp;{user.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
