const ReviewCard = (props) => {
  return (
    <div className="mb-10 max-w-2xl text-gray-200">
      <div className="card-body text-lg md:text-xl text-white flex flex-col justify-center gap-3">
        {props.children}
      </div>
      <div className="my-6">
        <p className="font-bold text-gray-200">{`- ${props.personName}, ${props.jobRelation}`}</p>
        <div className="text-sm text-gray-200">{props.jobPosition}</div>
      </div>
      <div className="text-center my-2">
        <a href={props.goTo} target="_blank" rel="noreferrer">
          <button className="rounded-md bg-black px-4 py-2 text-white">
            Read it on LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
