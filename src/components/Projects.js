import SectionH2 from "./SectionH2";
// import SectionH3 from "./SectionH3";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="section-projects">
      <SectionH2>Projects</SectionH2>
      <div className="flex flex-wrap gap-1 justify-evenly max-w-6xl mx-auto mb-16">
        <ProjectCard
          image1="../images/filmclub1.gif"
          image2="../images/filmclubdb.png"
          projectName="FilmClub"
          projectBlurb="Always screening near you."
          github="https://github.com/eburdekin/film-club-react"
          demo="https://www.loom.com/share/13adaf09f1d946abae49477271323fbc?sid=e215cd12-2c46-49d4-9756-263dffcbe675"
        >
          <div className="text-sm m-5 flex flex-col justify-center gap-4">
            <p></p>
            <p>Front-end</p>
            <p>
              - Fully-responsive React app with nested layouts and dark mode
              built with Tailwind CSS
              <br />
              - Global user state management with React's useContext hook
              <br />- Modals using Formik for validating user data entry Backend
            </p>
            <p>Back-end</p>
            <p>
              - Flask app built with SQLAlchemy and Flask-Restful
              <br />
              - Bcrypt for password hashing and user authentication
              <br />- Marshmallow for serialization and validation
            </p>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
