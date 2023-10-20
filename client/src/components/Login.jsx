import React, { useContext, useEffect } from "react";
import SchoolContext from "./SchoolContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { user, setUser, handleLoginSubmit, isLoggedIn, error } =
    useContext(SchoolContext);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
    else navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <div className="student-form">
      <h2>Login</h2>
      <div className="error-msg">{error}</div>

      <form name="loginForm" onSubmit={handleLoginSubmit}>
        <div>
          <label>Username or Email</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleLoginChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>
          New user please <Link to={`/register`}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
