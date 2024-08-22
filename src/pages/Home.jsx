import React from "react";
import Hero from "../components/Hero";
import Advantageous from "../components/Advantageous";
import Institutional from "../components/Institutional";
import Description from "../components/Description";
import DescriptionTwo from "../components/DescriptionTwo";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Advantageous />
      <Institutional />
      <Description />
      <DescriptionTwo />
      <Footer />
    </div>
  );
}

export default Home;
