import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://github.com/YacineNamane"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#fafafa", fontSize: "2em" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/namane-yacine-542398252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#fafafa", fontSize: "2em" }}
          />
        </a>
        <a href="mailto:yacine.nam@outlook.fr">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#fafafa", fontSize: "2em" }}
          />
        </a>
      </div>
      <div className="rights">
        <p>© 2023 Yacine Namane | Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
