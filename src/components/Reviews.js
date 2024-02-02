import ReviewCard from "./ReviewCard";

const Testimonies = (props) => {
  return (
    <div className="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto">
      <ReviewCard
        image="../KellyReilly.jpeg"
        goTo="https://www.linkedin.com/in/eburdekin/"
        personName="Kelly Reilly"
        jobPosition={
          <>
            <p>Value Consultant at Google</p>
          </>
        }
      >
        <div className="text-sm m-5">
          <p className="mb-2">
            <span className="text-4xl">“</span>If you're reading this and
            considering hiring Eileen, I can only say that I hope I beat you to
            it! Eileen is the single most adaptable, exceptional talent I have
            ever worked with.
          </p>
          <p className="mb-2">
            I first met Eileen when she was hired to handle the Programmatic Ad
            Operations for the new Hewlett Packard account at Essence. When
            Eileen was on-boarded, the HP account was only a test campaign, but
            Eileen, as part of a team of fewer than ten people, grew the
            business to be Digital Agency of Record in less than a year. This,
            one of the biggest wins in our agency's history, was due in
            no-small-part to Eileen's work ethic and capacity to work rungs
            above her duties.
          </p>
          <p>
            A combination of tactical precision and a polished, client-friendly
            nature made her a standout talent for increasing client-services
            roles; her trajectory in taking on increasing responsibility was
            exponential. I would trust Eileen with any task, because she's
            proven to me that she doesn't let anything get between her and
            excellence.”
          </p>
        </div>
      </ReviewCard>
      <ReviewCard
        image="../JakeBishop.jpeg"
        goTo="https://www.linkedin.com/in/eburdekin/"
        personName="Jake Bishop"
        jobPosition={
          <>
            <p>Strategic Account Executive at Procore</p>
          </>
        }
      >
        <div className="text-sm m-5">
          <p className="mb-2">
            <span className="text-4xl">“</span>Could not be happier to discover
            you can publicly recommend someone on LinkedIn, for, everyone should
            know what a pleasure it is to work with and for Eileen.
          </p>{" "}
          <p className="mb-2">
            Eileen is an exemplary teammate with quiet confidence and
            competence. She doesn't show off to everyone that she manages 30+
            campaigns across 3-5 platforms each quarter, she just does it - and
            she lets her work show for itself. I attribute most of what I have
            learned in digital media to my time spent working alongside Eileen.
            She is patient as well as demanding - she knows when to add to your
            plate and she knows when to jump in and help - and that is all you
            can really ask for someone training you and helping in your
            transition.
          </p>
          <p>
            If you are looking for someone who is organized, handles themselves
            well under pressure, and thinks critically, look no further. Thank
            you, Eileen. I look forward to our continued work and am excited to
            see what the future holds for you.”
          </p>
        </div>
      </ReviewCard>
    </div>
  );
};

export default Testimonies;
