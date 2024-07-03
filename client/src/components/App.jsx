import { lazy, Suspense, useState } from "react";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Technologies from "./Technologies.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="navbar is-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title is-4 has-text-primary-00">William Tucker</h1>
            </div>
            <div className="column is-flex is-justify-content-flex-end">
              <ul className="navbar-menu is-flex">
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#technologies">Technologies</a></li>
                <li className="navbar-item"><a href="#projects">Projects</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="container my-6" style={{ backgroundColor: '#121212' }}>
        <Profile />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
};