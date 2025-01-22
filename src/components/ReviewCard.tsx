import React from "react";

type ReviewCardProps = {
  children: Iterable<React.ReactNode>;
  personName: string;
  jobRelation: string;
  jobPosition: string;
  goTo: string;
};

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="mb-10 p-3 max-w-2xl rounded border border-white">
      <div className=" flex flex-col justify-center gap-3">
        {props.children}
      </div>
      <div className="my-6">
        <p className="font-bold text-gray-200">{`- ${props.personName}, ${props.jobRelation}`}</p>
        <div className="text-sm text-gray-200">{props.jobPosition}</div>
      </div>
      <div className="text-center my-2">
        <a href={props.goTo} target="_blank" rel="noreferrer">
          <button className="px-4 py-2">Read it on LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
