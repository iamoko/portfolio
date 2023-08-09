import React from "react";
import PageHeader from "../components/page-header";

function Works() {
  document.title = "Works Me";
  return (
    <div>
      <PageHeader label="Works" />
      <div className="p-6">
        <p>Works</p>
      </div>
    </div>
  );
}

export default Works;
