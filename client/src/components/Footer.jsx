import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <ul className="navbar-menu is-flex is-justify-content-center">
              <li className="navbar-item"><a href="#about">About</a></li>
              <li className="navbar-item"><a href="#technologies">Technologies</a></li>
              <li className="navbar-item"><a href="#projects">Projects</a></li>
              <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}