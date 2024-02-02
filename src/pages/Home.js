import Logo from "../components/Logo";

import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col text-center items-center mx-auto transition-opacity duration-1000 ease-in opacity-100">
      {/* <NavBar /> */}
      <Logo />
      {/* <div></div> */}
      <p className="font-bold">Los Angeles, CA</p>
      <p className="font-medium">
        Full-stack developer & digital marketing expert.
        <br /> You can find me @eburdekin in most places.
      </p>
      {/* <h3>Reviews</h3>
      <Reviews /> */}
      <Footer />
    </div>
  );
}

export default Home;
