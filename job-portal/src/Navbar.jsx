import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Action";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <h2>Home</h2>
        </Link>
      </div>
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <div>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/signup"
            >
              <h2>Signup</h2>
            </Link>
          </div>
        </>
      )}
      
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/jobs/:id">
          <h2>Job Details Page</h2>
        </Link>
      </div>
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/apply">
          <h2>Job Apply Page</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
