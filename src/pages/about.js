import React from "react";
import PageHeader from "../components/page-header";

function About() {
  document.title = "About Me";
  return (
    <div>
      <PageHeader label="About Me" />
      <div className="p-6">
        <p>About</p>
      </div>
    </div>
  );
}

export default About;
