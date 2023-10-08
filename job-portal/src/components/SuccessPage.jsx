// SuccessPage.js
import React from "react";
import { useSelector } from "react-redux";

function SuccessPage() {
  const application = useSelector((state) => state.jobs.application);
  console.log(application);

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
      <h2
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Application Submitted Successfully
      </h2>
      <h3
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Application Details:
      </h3>
      <p
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Name: {application.name}
      </p>
      <p
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Email: {application.email}
      </p>
      <p
        style={{
          width: "61%",
          margin: "auto",
          marginTop: "20px",
          display: "block",
          padding: "10px",
        }}
      >
        Cover Letter: {application.coverLetter}
      </p>
      {/* Display other application details */}
    </div>
  );
}

export default SuccessPage;
