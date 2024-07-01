import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-one-half">
            <div className="pic-container">
              <img src="/assets/William_Tucker_Photo.jpg" alt="William Tucker profile picture" className="profile-pic" />
            </div>
          </div>
          <div className="column">
            <div className="profile-info">
              <h2 className="title">William Tucker</h2>
              <p className="profile-text">Full Stack Developer</p>
              <div className="btn-container">
                <button
                  className="button has-text-primary-100 is-outlined-100 is-medium"
                  onClick={() => {
                    window.open("/assets/William_Tucker_FullStack_Resume.pdf");
                  }}
                >
                  Download Resume
                </button>
                <button
                  className="button has-text-primary-100 is-outlined-100 is-medium"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  Contact Info
                </button>
              </div>
              <div className="social-container">
                <a href="https://www.linkedin.com/in/william-h-tucker-iv" target="_blank" rel="noreferrer" className="linkedin-icon" style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/wtucker29" target="_blank" rel="noreferrer" className="github-icon" style={{ color: "white" }}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}