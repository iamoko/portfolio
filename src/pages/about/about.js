import React from "react";
import PageHeader from "../../components/page-header";
import { name } from "../../utils/contacts";
import Services from "./services";

function About() {
  document.title = "About Me";
  const p_class = "text-base";
  return (
    <div>
      <PageHeader label="About Me" />
      <div className="p-6">
        <p className="text-gray-200">Hello! I'm {name}.</p>
        <p className={`text-gray-400 ${p_class}`}>
          Back-end & Frond-end developer from Kampala, Uganda. I have rich
          experience in various programing languages, also I am good at Magento.
          I love to talk with you about our unique..
        </p>

        <div className="mt-4 ">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <p className={p_class}>AGE . . . . . . 25</p>
            <p className={p_class}>RESIDENCE . . . . . . KAMPALA</p>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-2">
            <p className={p_class}>FREELANCE . . . . . . AVAILABLE</p>
            <p className={p_class}>ADDRESS . . . . . . KAMPALA, UGANDA</p>
          </div>
        </div>
      </div>
      <PageHeader label="My Services" />
      <Services />
    </div>
  );
}

export default About;
