import React from "react";

type ProjectCardProps = {
  children: Iterable<React.ReactNode>;
  projectName: string;
  image: string;
  link1: string;
  linktext1: string;
  link2: string;
  linktext2: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="relative rounded p-3 md:p-4 max-w-md group">
      <p className="text-xl mb-2 text-center">{props.projectName}</p>
      <div className="relative">
        <img
          src={props.image}
          alt={props.projectName}
          className="rounded border w-full h-[200px] object-cover border-gray-600 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="flex gap-5 items-center">
            <a href={props.link1} target="_blank" rel="noreferrer">
              <button className="p-2 mx-2 w-[100px]">{props.linktext1}</button>
            </a>
            <a href={props.link2} target="_blank" rel="noreferrer">
              <button className="p-2 mx-2 w-[100px]">{props.linktext2}</button>
            </a>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col justify-center">
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
