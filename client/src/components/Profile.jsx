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
              <img src="/assets/William_Tucker_Compressed.webp" alt="William Tucker profile picture" className="profile-pic" data-src="/assets/William_Tucker_Compressed.webp" loading="lazy"/>
            </div>
          </div>
          <div className="column">
            <div className="profile-info">
              <h2 className="title">William Tucker</h2>
              <p className="profile-text">Full Stack Developer</p>
              <div className="btn-container">
                <button
                  className="button is-link is-focused is-medium is-responsive"
                  onClick={() => {
                    window.open("/assets/WilliamTucker_Resume.pdf", "_blank");
                  }}
                >
                  Download Resume
                </button>
                <button
                  className="button is-link is-focused is-responsive is-medium"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  Contact Info
                </button>
              </div>
              <div className="social-container">
                <a href="https://www.linkedin.com/in/william-h-tucker-iv" target="_blank" rel="noreferrer" className="linkedin-icon" aria-label="Link to LinkedIn" style={{ color: 'white' }}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/wtucker29" target="_blank" rel="noreferrer" className="github-icon" aria-label="Link to Github" style={{ color: 'white' }}>
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