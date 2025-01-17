// src/User.jsx
import React, { useState, useEffect } from "react";

function User() {
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser (data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5"><p>Loading user data...</p></div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="display-4">User  Information</h1>
      {user && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;