const ReviewCard = (props) => {
  return (
    <div className="card text-center shadow-2xl max-w-sm bg-white rounded-2xl">
      <div className="w-full h-36 purple-background flex items-center justify-around neutral rounded-t-2xl">
        <img src={props.image} className="h-24 w-24 rounded-full" alt="" />
        <div className="text-left w-44">
          <p className="font-bold neutral">{props.personName}</p>
          <div className="text-sm font-light mt-2">{props.jobPosition}</div>
        </div>
      </div>
      <div className="card-body text-left justify-between">
        {props.children}
      </div>
      <div className="justify-center mb-4">
        <a
          href={props.goTo}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-200 rounded-md"
        >
          Read it on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
