import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="columns is-centered">
          <div className="column is-narrow">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "white" }}/>
              <a href="mailto:william.tucker29@gmail.com?subject=Contact%20from%20Portfolio" className="contact-link">
                william.tucker29@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "white" }}/>
              <a href="https://www.linkedin.com/in/william-h-tucker-iv" target="_blank" rel="noreferrer" className="contact-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}