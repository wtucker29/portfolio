import { lazy, Suspense, useState } from "react";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Technologies from "./Technologies.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-6">
        <Profile />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
};