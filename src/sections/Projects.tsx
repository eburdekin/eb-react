import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="section-projects">
      <h2 className="section-header my-5">Projects</h2>
      <div className="flex flex-wrap gap-4 justify-evenly max-w-6xl mx-auto">
        <ProjectCard
          image="../images/expungeassist.webp"
          projectName="Expunge Assist"
          link1="https://expungeassist.org/"
          linktext1="Live"
          link2="https://github.com/hackforla/expunge-assist"
          linktext2="GitHub"
        >
          Free digital tool built with{" "}
          <span className="highlighted">React</span> designed to aid
          Californians with arrest and conviction histories in clearing their
          criminal records.
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
