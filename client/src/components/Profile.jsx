import React from "react";

export default function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-quarter">
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
                  className="button is-primary is-outlined is-medium"
                  onClick={() => {
                    window.open("/assets/William_Tucker_FullStack_Resume.pdf");
                  }}
                >
                  Download Resume
                </button>
                <button
                  className="button is-primary is-outlined is-medium"
                  onClick={() => {
                    document.getElementById("contact").scrollIntoView();
                  }}
                >
                  Contact Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}