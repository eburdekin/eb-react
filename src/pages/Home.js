import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Content from "../components/Content";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

import React, { useState, useEffect } from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NavBar />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="md:fixed md:top-0 h-full overflow-auto">
            <Hero />
          </div>
        </div>
        <div className="w-full md:w-1/2 overflow-auto">
          <Content />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
