// Signup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupSuccess } from "../Action";

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State variable for showing the alert

  const handleSignup = () => {
    // Simulate user registration (replace this with your registration logic).
    const user = { email };
    dispatch(signupSuccess(user));
    // Store user data in localStorage upon successful signup
    localStorage.setItem("user", JSON.stringify(user));
    // Show the alert
    setShowAlert(true);
  };

  return (
    <div>
      <h2 style={{ width: "fit-content", margin: "auto", marginTop: "20px" }}>
        Signup
      </h2>
      {showAlert && (
        alert("Signup successful! You can now access other pages.")
         
        
      )}
      <input
        type="email"
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;
