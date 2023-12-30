import React from "react";
import FloatingImage from "../Effects/ImageFloat";
import Type from "../Effects/Type";
function Home() {
  return (
    <div className="home-section" id="Home">
      <div className="text-en-boucle">
        <div style={{ fontSize: 30, padding: 50, textAlign: "left" }}>
          <Type />
        </div>
      </div>
      <div className="img-apropos">
        <FloatingImage />
      </div>
    </div>
  );
}

export default Home;
