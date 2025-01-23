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
    <div className="review-card">
      <div className="review">{props.children}</div>
      <div className="review-attribution">
        <p>{`- ${props.personName}, ${props.jobRelation}`}</p>
        <div className="small-text">{props.jobPosition}</div>
      </div>
      <div className="linkedin-button-container">
        <a href={props.goTo} target="_blank" rel="noreferrer">
          <button>Read it on LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
