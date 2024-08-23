import React from "react";
import Hero from "../components/Hero";
import Advantageous from "../components/Advantageous";
import Institutional from "../components/Institutional";
import Description from "../components/Description";
import DescriptionTwo from "../components/DescriptionTwo";
import Footer from "../components/Footer";
import SliderBrand from "../components/SliderBrand";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Advantageous />
      <Institutional />
      <SliderBrand />
      <Description />
      <Contact/>
      <DescriptionTwo />
      <Footer />
    </div>
  );
}

export default Home;
