import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="flex flex-wrap gap-1 justify-evenly max-w-6xl mx-auto">
      <ReviewCard
        image="../KellyReilly.jpeg"
        goTo="https://www.linkedin.com/in/eburdekin/"
        personName="Kelly Reilly"
        jobPosition={
          <>
            <p>Value Consultant at Google</p>
            <p className="text-xs mt-2">Former Teammate</p>
          </>
        }
      >
        <div className="text-sm m-5">
          <p className="mb-4">
            "If you're reading this and considering hiring Eileen, I can only
            say that I hope I beat you to it! Eileen is the single most
            adaptable, exceptional talent I have ever worked with.
          </p>
          <p className="mb-4">
            A combination of tactical precision and a polished, client-friendly
            nature made her a standout talent for client-services roles; her
            trajectory in taking on increasing responsibility was exponential.
          </p>
          <p className="mb-4">
            One of the biggest wins in our agency's history was due in
            no-small-part to Eileen's work ethic and capacity to work rungs
            above her duties.”
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
            <p className="text-xs mt-2">Former Direct Report</p>
          </>
        }
      >
        <div className="text-sm m-5">
          <p className="mb-4">
            "Everyone should know what a pleasure it is to work with and for
            Eileen.
          </p>
          <p className="mb-4">
            Eileen is an exemplary teammate with quiet confidence and
            competence. She doesn't show off to everyone that she manages 30+
            campaigns across 3-5 platforms each quarter, she just does it - and
            she lets her work show for itself. I attribute most of what I have
            learned in digital media to my time spent working alongside Eileen.
          </p>
          <p className="mb-4">
            If you are looking for someone who is organized, handles themselves
            well under pressure, and thinks critically, look no further.”
          </p>
        </div>
      </ReviewCard>
    </div>
  );
}
