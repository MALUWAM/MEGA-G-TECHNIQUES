import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => (
  <div className="not-found-container">
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
