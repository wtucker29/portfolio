import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="columns">
          <div className="column has-text-centered">
            <span className="contact-email">
              <p>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <a href="mailto:william.tucker29@gmail.com?subject=Contact%20from%20Portfolio">
                  william.tucker29@gmail.com
                </a>
              </p>
            </span>
            <span className="contact-linkedin">
              <p>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <a href="https://www.linkedin.com/in/william-h-tucker-iv" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}