const ReviewCard = (props) => {
  return (
    <div className="text-center border border-gray-600 mb-10 max-w-2xl text-gray-200 rounded-2xl md:p-6 p-2">
      <div className="card-body text-left text-lg text-white">
        {props.children}
      </div>
      <div className="text-left m-6">
        <p className="font-bold text-lg">{`- ${props.personName}, ${props.jobRelation}`}</p>
        <div className="text-sm mt-2">{props.jobPosition}</div>
      </div>
      <div className="justify-center my-2">
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
