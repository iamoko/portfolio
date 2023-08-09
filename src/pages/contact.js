import React from "react";
import PageHeader from "../components/page-header";

function Contact() {
  document.title = "Contact Me";
  return (
    <div>
      <PageHeader label="Get in Touch" />
      <div className="p-6">
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Contact;
