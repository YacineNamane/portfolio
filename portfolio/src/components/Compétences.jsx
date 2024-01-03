import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import sass from "../images/sass.png";
import react from "../images/react.png";
import nodejs from "../images/nodejs.png";
import postman from "../images/postman.png";
import chatgpt from "../images/chatgpt.png";
import mongoDB from "../images/mongodb.png";
import lighthose from "../images/lighthouse.png";

function Compétences() {
  return (
    <div className="skills-container">
      <div className="skills-section">
        <h2>
          Pro | <span> Skillset</span>
        </h2>
      </div>
      <div className="compétence-section">
        <div className="div-skill">
          {" "}
          <img src={html} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={css} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={js} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={react} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={nodejs} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={sass} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={mongoDB} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={postman} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={lighthose} alt="" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={chatgpt} alt="" />
        </div>
      </div>
      <div className="compétence section"></div>
    </div>
  );
}
export default Compétences;
