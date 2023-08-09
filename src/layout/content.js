import React, { useEffect, useState } from "react";
import About from "../pages/about/about";

import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "../pages/contact";

import "../assets/style/animation.css";
import Resume from "../pages/resume";
import Works from "../pages/works";
import Products from "../pages/products";
function Content() {
  let location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className="w-full md:py-5">
      {/* <div className="h-full main"> */}
      <div
        className={`${transitionStage} h-full main py-3 pe-3 sm:rounded-e-3xl`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <div className="h-full overflow-y-auto">
          <Routes location={displayLocation}>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<About />} />
          </Routes>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Content;
