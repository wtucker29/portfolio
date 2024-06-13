import { lazy, Suspense, useState } from "react";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
    <header>
      <nav>
        <h1>William Tucker</h1>
        <ul className="is-flex">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main className="container my-6">
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </>
  )
};