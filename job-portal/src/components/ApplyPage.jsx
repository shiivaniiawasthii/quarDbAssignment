import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApplication } from "../Action";
import { useNavigate } from "react-router-dom";

function ApplyPage() {
  const dispatch = useDispatch();
  const selectedJob = useSelector((state) => state.jobs.jobs[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an application object with user input
    const application = {
      name,
      email,
      coverLetter,
      resume,
    };

    // Set the application data in the Redux store
    dispatch(setApplication(application));

    // Redirect to the success page
    navigate("/success");
  };

  return (
    <div
      style={{
        width: "fit-content",
        margin: "auto",
        marginTop: "20px",
        padding: "10px",
        fontSize: "20px",
      }}
    >
      <h2>Apply for the Job</h2>
      <p>Job Title: {selectedJob.name}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cover Letter Note:</label>
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Resume (optional):</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit"
         style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}>Apply</button>
      </form>
    </div>
  );
}

export default ApplyPage;
