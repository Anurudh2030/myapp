import React from "react";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary">Go to Home</a>
    </div>
  );
}

export default NotFound;