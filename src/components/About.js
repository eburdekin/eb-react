import SectionH2 from "./SectionH2";
import SectionH3 from "./SectionH3";
import Reviews from "./Reviews";

const About = ({ props }) => {
  return (
    <section id="section-about">
      {/* <SectionH2>About</SectionH2> */}
      {/* <div></div> */}
      <SectionH2>Reviews</SectionH2>
      <Reviews />
    </section>
  );
};

export default About;
