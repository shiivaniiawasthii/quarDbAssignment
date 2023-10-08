import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function JobDetails() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  console.log(jobId);
  const job = useSelector((state) => state.jobs.jobs?.[0]);

  if (!job) {
    return <div>Job not found.</div>;
  }

  const handleApplyClick = () => {
    // Implement your logic for applying to the job here
    alert("You have applied for the job!");

    navigate(`/apply`);
  };

  return (
    <div
      style={{
        width: "61%",
        margin: "auto",
        marginTop: "20px",
        display: "block",
        padding: "10px",
      }}
    >
      <h1
        style={{
          width: "fit-content",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Job Details
      </h1>
      <h2>{job.name}</h2>
      <p>{job.details}</p>
      <button  style={{
              width: "61%",
              margin: "auto",
              marginTop: "20px",
              display: "block",
              padding: "10px",
            }}onClick={handleApplyClick}>Apply Now</button>
      <Link to="/">Back to Job List</Link>
    </div>
  );
}

export default JobDetails;
