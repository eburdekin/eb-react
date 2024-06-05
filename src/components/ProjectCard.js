const ProjectCard = (props) => {
  return (
    <div className="relative p-3 md:p-4 border mb-10 max-w-sm bg-black rounded-2xl group">
      <div className="relative">
        <img
          src={props.image}
          alt={props.projectName}
          className="rounded border border-gray-600 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="text-gray-300 flex items-center">
            {props.link1 ? (
              <a href={props.link1} target="_blank" rel="noreferrer">
                <button className="rounded bg-black font-bold p-2 mx-2">
                  {props.linktext1}
                </button>{" "}
              </a>
            ) : (
              ""
            )}
            {props.link2 ? (
              <a href={props.link2} target="_blank" rel="noreferrer">
                <button className="rounded bg-black font-bold p-2 mx-2">
                  {props.linktext2}
                </button>{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="text-gray-300 mt-4">
        <p className="text-xl md:text-2xl font-bold text-white">
          {props.projectName}
        </p>
        <div className="flex flex-col justify-center gap-4 mt-3">
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
