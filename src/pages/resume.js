import React from "react";
import PageHeader from "../components/page-header";

function Resume() {
  document.title = "Resume Me";
  return (
    <div>
      <PageHeader label="Resume" />
      <div className="p-6">
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Resume;
