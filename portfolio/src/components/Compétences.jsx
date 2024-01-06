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
import git from "../images/git.png";
import github from "../images/github.png";
import vsc from "../images/vsc.png";

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
          <img src={html} alt="Html" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={css} alt="CSS" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={js} alt="JS" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={react} alt="React" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={nodejs} alt="nodeJS" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={sass} alt="Sass" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={mongoDB} alt="mongoDB" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={git} alt="git" />
        </div>
      </div>
      <div className="skills-section">
        <h2>
          Outils | <span> Utilisés </span>
        </h2>
      </div>
      <div className="compétence-section">
        <div className="div-skill">
          {" "}
          <img src={github} alt="Github" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={chatgpt} alt="chatgpt" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={vsc} alt="visual code studio" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={postman} alt="postman" />
        </div>
        <div className="div-skill">
          {" "}
          <img src={lighthose} alt="lighthose" />
        </div>
      </div>
    </div>
  );
}
export default Compétences;
