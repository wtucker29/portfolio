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
            <button
                className="button has-text-white is-outlined is-medium"
                onClick={() => {
                  window.open("mailto:william.tucker29@gmail.com?subject=Contact%20from%20Portfolio");
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: 'white', marginRight: '0.5rem' }} />
                william.tucker29@gmail.com
              </button>
            </div>
            <div className="contact-item">
              <button
                className="button has-text-white is-outlined is-medium"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/william-h-tucker-iv");
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ color: 'white', marginRight: '0.5rem' }} />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}