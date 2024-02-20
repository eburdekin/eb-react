import SectionH2 from "./SectionH2";
// import SectionH3 from "./SectionH3";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="section-projects">
      <SectionH2>Projects</SectionH2>
      <ProjectCard
        image="../images/filmclub.gif"
        projectName="Film Club"
        projectBlurb="Hellooo"
        github=""
        demo=""
      >
        <div className="text-sm m-5">
          <p className="mb-4">
            "If you're reading this and considering hiring Eileen, I can only
            say that I hope I beat you to it! Eileen is the single most
            adaptable, exceptional talent I have ever worked with.
          </p>
          <p className="mb-4">
            A combination of tactical precision and a polished, client-friendly
            nature made her a standout talent for client-services roles; her
            trajectory in taking on increasing responsibility was exponential.
          </p>
          <p className="mb-4">
            One of the biggest wins in our agency's history was due in
            no-small-part to Eileen's work ethic and capacity to work rungs
            above her duties.”
          </p>
        </div>
      </ProjectCard>
    </section>
  );
}
