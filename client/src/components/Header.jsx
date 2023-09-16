import { Link } from "react-router-dom";
import "./css/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scolly >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      
        <h1>School Management App</h1>
    
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
        <li>
          <Link to="/reports">Generate Reports</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
