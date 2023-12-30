import React, { useEffect } from "react";

const FadingTextEffect = ({ text }) => {
  useEffect(() => {
    const element = document.getElementById("fadingText");

    const fadeInLoop = () => {
      element.classList.add("fade-in");

      setTimeout(() => {
        element.classList.remove("fade-in");
      }, 2000);

      setTimeout(fadeInLoop, 7000);
    };

    fadeInLoop();
  }, []);

  return (
    <div id="fadingText">
      <h2>{text}</h2>
    </div>
  );
};

export default FadingTextEffect;
