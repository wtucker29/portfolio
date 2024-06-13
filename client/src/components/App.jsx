import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    </>
  )
};