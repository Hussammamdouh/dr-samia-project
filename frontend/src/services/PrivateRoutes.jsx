import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';  // Correct default import

// PrivateRoute component that checks if the user is logged in before rendering the protected component
const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');  // Get token from localStorage

  // If the user is not logged in (i.e., no token), redirect to login page
  if (!token) {
    return <Navigate to="/login-user" />;
  }

  // Decode the token to get user information (e.g., isAdmin flag)
  const decodedToken = jwtDecode(token);

  // If the user is not an admin, redirect to home page
  if (!decodedToken.isAdmin) {
    return <Navigate to="/" />;
  }

  return element;  // If the user is an admin, render the protected route
};

export default PrivateRoute;
