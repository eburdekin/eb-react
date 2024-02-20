import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NavBar />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="md:fixed md:top-0 h-full overflow-auto">
            <Hero />
          </div>
        </div>
        <div className="w-full md:w-2/3 overflow-auto">
          <Page />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
