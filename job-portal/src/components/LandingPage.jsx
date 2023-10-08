import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, fetchJobs } from "../Action";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LandingPage() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.jobs.selectedLanguage);
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    dispatch(setLanguage(value));
  };

  const handleSearch = () => {
    dispatch(fetchJobs(selectedLanguage));
  };

  const handleViewDetails = (jobId) => {
    // Use navigate to go to the job details page
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div>
      <h1
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Job Search
      </h1>
      <input
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
        type="text"
        placeholder="Enter programming language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      />
      <button
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
        onClick={handleSearch}
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
          color: "red",
          font: "20px",
        }}
      >
        {jobs.map((job) => (
          <li key={job.id}>
            {job.name} -{" "}
            <button onClick={() => handleViewDetails(job.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
