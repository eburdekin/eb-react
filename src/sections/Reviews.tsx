import React from "react";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  return (
    <section id="section-reviews">
      <h2 className="text-lg md:text-xl text-gray-200 font-bold text-center py-2 my-5 md:my-8">
        REVIEWS
      </h2>
      <div className="flex flex-row flex-wrap gap-10 justify-evenly max-w-6xl mx-auto">
        <ReviewCard
          goTo="https://www.linkedin.com/in/eburdekin/"
          personName="Kelly Reilly"
          jobRelation="Former Teammate"
          jobPosition="Value Consultant at Google"
        >
          <p>
            "If you're reading this and considering hiring Eileen, I can only
            say that I hope I beat you to it! Eileen is the single most
            adaptable, exceptional talent I have ever worked with.
          </p>
          <p>
            A combination of tactical precision and a polished, client-friendly
            nature made her a standout talent for client-services roles.
          </p>
          <p>
            One of the biggest wins in our agency's history was due in
            no-small-part to Eileen's work ethic and capacity to work rungs
            above her duties."
          </p>
        </ReviewCard>
        <ReviewCard
          goTo="https://www.linkedin.com/in/eburdekin/"
          personName="Jake Bishop"
          jobRelation="Former Direct Report"
          jobPosition="Account Executive at Procore"
        >
          <p>
            "Everyone should know what a pleasure it is to work with and for
            Eileen.
          </p>
          <p>
            Eileen is an exemplary teammate with quiet confidence and
            competence. I attribute most of what I have learned in digital media
            to my time spent working alongside Eileen.
          </p>
          <p>
            If you are looking for someone who is organized, handles themselves
            well under pressure, and thinks critically, look no further."
          </p>
        </ReviewCard>
      </div>
    </section>
  );
};

export default Reviews;
