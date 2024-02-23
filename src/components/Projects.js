import SectionH2 from "./SectionH2";
// import SectionH3 from "./SectionH3";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const highlighted = {
    color: "#49d6db",
  };

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
          <div className="flex flex-col justify-center gap-4 mt-3">
            <p>
              Film clubs are back - ask the{" "}
              <a
                href="https://www.nytimes.com/2024/02/01/movies/nyc-movie-clubs.html"
                target="_blank"
                rel="noreferrer"
                style={highlighted}
              >
                New York Times!
              </a>{" "}
              FilmClub is a social hub for film buffs to meet and discuss their
              favorite films. I wanted to build on the functionality of
              Letterboxd to allow for group discussions.
            </p>
            <p>
              <b>Frontend:</b> Fully-responsive{" "}
              <span style={highlighted}>React</span> app with nested layouts and
              dark mode built using{" "}
              <span style={highlighted}>Tailwind CSS</span>. Global user state
              management is implemented with React's useContext hook. Modals
              utilize <span style={highlighted}>Formik</span> for validating
              user data entry.
            </p>
            <p>
              <b>Backend:</b> <span style={highlighted}>Flask-Restful </span>app
              API built with <span style={highlighted}>SQLAlchemy</span>.{" "}
              Password hashing and user authentication through{" "}
              <span style={highlighted}>bcrypt</span>. Serialization and
              validation via <span style={highlighted}>Marshmallow</span>.
            </p>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}
