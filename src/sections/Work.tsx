import React from "react";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  return (
    <section id="work">
      <h2 className="section-header">Work</h2>
      <div className="project-card-container">
        <ProjectCard
          image="../images/expungeassist.webp"
          projectName="Expunge Assist"
          link1="https://expungeassist.org/"
          link2="https://github.com/hackforla/expunge-assist"
          technologies={["React", "TypeScript", "MaterialUI", "Jest"]}
        >
          Free digital tool designed to aid Californians with arrest and
          conviction histories in clearing their criminal records.
        </ProjectCard>
      </div>
    </section>
  );
};

export default Work;
