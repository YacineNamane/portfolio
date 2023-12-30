import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function APropos() {
  return (
    <div className="apropos-section" id="Apropos">
      <div>
        <h2> A propos </h2>
      </div>
      <div>
        <p>
          Passionné par le développement web <br /> particulièrement font-end
          web design <br />
          Autodidacte a 26 ans. Passionné par le développement web <br />{" "}
        </p>
      </div>
      <div>
        <p>
          N'hésitez pas à explorer mes projets déjà réaliser
          <a href="#projects"> ici.</a> <br />
          Vous pouvez si vous le souhiater télécharger mon CV au format PDF ,
          pour en savoir plus sur moi{" "}
          <a
            href="file:///C:/Users/Yacin/OneDrive/Desktop/theon,e/M1%20transfert%20PDF/CURRICULUM%20VITAE%202022.pdf"
            download
          >
            ici.
          </a>
        </p>
        <div className="apropos-socials">
          <a
            href="https://github.com/YacineNamane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/namane-yacine-542398252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
            />
          </a>
          <a href="mailto:yacine.nam@outlook.fr">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default APropos;
