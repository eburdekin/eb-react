const ReviewCard = (props) => {
  return (
    <div className="text-center border mb-10 max-w-xs bg-white rounded-2xl">
      <div className="w-full h-36 bg-gray-200 flex items-center justify-around neutral rounded-t-2xl">
        <img src={props.image} className="h-20 w-20 rounded-full" alt="" />
        <div className="text-left w-44">
          <p className="font-bold text-md">{props.personName}</p>
          <div className="text-sm mt-2">{props.jobPosition}</div>
        </div>
      </div>
      <div className="card-body text-left justify-between">
        {props.children}
      </div>
      <div className="justify-center my-6">
        <a
          href={props.goTo}
          target="_blank"
          rel="noreferrer"
          className="mt-5 rounded-md text-sm bg-black px-4 py-2 text-white"
        >
          Read it on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
