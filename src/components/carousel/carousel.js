import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const pause = false;
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="slide">
      {content.map((item, index) => (
        <div
          className={counter - 1 === index ? "show" : "not-show"}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
