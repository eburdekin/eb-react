import SectionH2 from "../components/SectionH2";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="section-projects">
      <SectionH2>Projects</SectionH2>
      <div className="flex flex-wrap gap-1 justify-evenly max-w-6xl mx-auto mb-16">
        <ProjectCard
          image="../images/filmclub1.gif"
          projectName="FilmClub"
          link1="https://github.com/eburdekin/film-club-react"
          linktext1="GitHub"
        >
          Fully-responsive <span className="highlighted">React</span> frontend
          with "theatre mode" built using Tailwind CSS. Global user state
          managed with useContext hook. Backend built in{" "}
          <span className="highlighted">Python</span> using Flask-SQLAlchemy and
          bcrypt.
        </ProjectCard>
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
