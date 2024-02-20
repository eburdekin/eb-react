// import SectionH3 from "./SectionH3";
import { Carousel } from "flowbite-react";

const ProjectCard = (props) => {
  return (
    <div className="card p-2 text-center border mb-10 max-w-2xl shadow-md bg-white rounded-2xl">
      <p className="text-xl md:text-2xl font-bold text-center justify-center w-max mx-auto p-2">
        {props.projectName}
      </p>
      <div className="mb-2">{props.projectBlurb}</div>
      <div className="card-body text-left justify-between">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel pauseOnHover>
            <img src={props.image1} alt={props.projectName} />
            <img src={props.image2} alt={props.projectName} />
          </Carousel>
        </div>
        {props.children}
      </div>
      <div className="justify-center flex flex-row my-6 gap-4">
        <a
          href={props.demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-md text-sm bg-black px-4 py-2 text-white"
        >
          Demo
        </a>
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md text-sm bg-black px-4 py-2 text-white"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
