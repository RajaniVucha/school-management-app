// ProtectedPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  // For example, you can use state management or context to check authentication status
  // Here, we are simulating it using a state variable
  const isLoggedIn = true;

  if (!isLoggedIn) {
    // Redirect unauthenticated users to the login page
    navigate.push("/login");
  }

  return (
    <div>
      <h2>Protected Page</h2>
    </div>
  );
};

export default ProtectedPage;
