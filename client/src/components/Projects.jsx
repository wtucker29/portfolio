import React from "react";

export default function Projects() {
  const projectData = [
    {
      title: "TriviaTrove",
      image: "/assets/projects/TriviaTrove/Splashpage.png",
      description: "TriviaTrove is a mobile trivia app that allows users to play trivia games after selecting a category and difficulty level. Users can also view their game history and high scores.",
      github: "https://github.com/wtucker29/TriviaTrove",
    },
    {
      title: "SkoolHub",
      image: "/assets/projects/SkoolHub/AdminPage.png",
      description: "SkoolHub is an education management system to help adminstrators, teachers, and students manage their school experience.",
      github: "https://github.com/wtucker29/SkoolHub",
    },
    {
      title: "Atelier",
      image: "/assets/projects/Atelier/ProductOverview.png",
      description: "Atelier is a e-commerce website that allows users to view and purchase clothing items. Users can also view ratings and reviews for each product.",
      github: "https://github.com/wtucker29/Project-Atelier",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container has-text-centered">
        <h2 className="title">Projects</h2>
        <div id="project-list" className="columns is-multiline">
          {projectData.map((project, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={project.image} alt={`${project.title} image`} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{project.title}</p>
                    </div>
                  </div>
                  <div className="content">{project.description}</div>
                </div>
                <footer className="card-footer">
                  <button className="button is-link is-focused is-responsive is-medium">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-footer-item"
                    >
                      View on GitHub
                    </a>
                  </button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}