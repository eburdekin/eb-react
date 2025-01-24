import React from "react";

type ProjectCardProps = {
  children: Iterable<React.ReactNode>;
  projectName: string;
  image: string;
  link1: string;
  link2: string;
  technologies: Array<string>;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card">
      <span className="project-name">{props.projectName}</span>
      <div className="project-image-container">
        <img
          src={props.image}
          alt={props.projectName}
          className="project-image"
        />
        <div className="project-image-overlay">
          <a href={props.link1} target="_blank" rel="noreferrer">
            <button className="project-image-overlay-button">Live</button>
          </a>
          <a href={props.link2} target="_blank" rel="noreferrer">
            <button className="project-image-overlay-button">GitHub</button>
          </a>
        </div>
      </div>
      <div>{props.children}</div>
      <div className="tech-chip-container">
        {props.technologies.map((tech) => {
          return (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
