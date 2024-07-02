import React from "react";

export default function Technologies() {
  return (
    <section id="technologies" className="section">
      <div className="container has-text-centered">
        <h2 className="title">Technologies</h2>
        <div className="icon-container">
          <div className="icon-rows">
            <img src="https://skillicons.dev/icons?i=js,html,css,jquery,react,express,babel,jest,vscode,bash,git,github,aws" alt="tech icons" />
            <img src="https://skillicons.dev/icons?i=mongodb,mysql,nodejs,postgres,postman,replit,supabase,webpack,figma,nginx,npm,redis,vite" alt="tech icons" />
          </div>
        </div>
      </div>
    </section>
  );
}