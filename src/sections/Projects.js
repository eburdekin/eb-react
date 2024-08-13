import SectionH2 from "../components/SectionH2";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="section-projects">
      <SectionH2>Projects</SectionH2>
      <div className="flex flex-wrap gap-4 justify-evenly max-w-6xl mx-auto mb-16">
        <ProjectCard
          image="../images/expungeassist.gif"
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
