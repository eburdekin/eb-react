const ReviewCard = (props) => {
  return (
    <div
      className="card text-center border mx-8 mb-10 max-w-sm shadow-md bg-white rounded-2xl"
      style={{ borderColor: "#165634" }}
    >
      <div className="w-full h-36 bg-gray-200 flex items-center justify-around neutral rounded-t-2xl">
        <img src={props.image} className="h-24 w-24 rounded-full" alt="" />
        <div className="text-left w-44">
          <p className="font-bold text-md">{props.personName}</p>
          <div className="font-light text-sm mt-2">{props.jobPosition}</div>
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
          style={{
            backgroundColor: "#BAD9D6",
            color: "#165634",
            // borderColor: "#165634",
          }}
          className="py-2 px-4 text-sm font-bold shadow-md rounded-2xl"
        >
          Read it on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
