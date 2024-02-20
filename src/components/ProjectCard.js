import SectionH3 from "./SectionH3";

const ProjectCard = (props) => {
  return (
    <div className="card text-center border mb-10 max-w-xl shadow-md bg-white rounded-2xl">
      <SectionH3>{props.projectName}</SectionH3>
      <div className="text-sm mt-2">{props.projectBlurb}</div>
      <div className="card-body text-left justify-between">
        <img
          src={props.image}
          className="w-200 h-auto"
          alt={props.projectName}
        />
        {props.children}
      </div>
      <div className="justify-center my-6 gap-4">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 rounded-md text-sm bg-black px-4 py-2 text-white"
        >
          GitHub
        </a>
        <a
          href={props.demo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 rounded-md text-sm bg-black px-4 py-2 text-white"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
