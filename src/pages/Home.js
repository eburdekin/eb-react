import Logo from "../components/Logo";
import Header from "../components/Logo";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen text-center items-center mx-auto transition-opacity duration-1000 ease-in opacity-100">
      {/* <NavBar /> */}
      <Logo />
      <p className="font-bold">Los Angeles, CA</p>
      <p className="font-medium">
        Full-stack developer & digital marketing expert.
        <br /> You can find me @eburdekin in most places.
      </p>
      <Footer />
    </div>
  );
}

export default Home;
