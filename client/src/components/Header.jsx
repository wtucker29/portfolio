import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="navbar is-light">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <h1 className="title is-4 has-text-primary-00">William Tucker</h1>
          </div>
          <div className="column is-flex is-justify-content-flex-end">
            <ul className="navbar-menu is-flex">
              <li className="navbar-item"><a href="#about">About</a></li>
              <li className="navbar-item"><a href="#experience">Experience</a></li>
              <li className="navbar-item"><a href="#technologies">Technologies</a></li>
              <li className="navbar-item"><a href="#projects">Projects</a></li>
              <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}