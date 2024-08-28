import React from "react";
import hero from "/bghero/bg-hero.png";
import Navbar from "./Navbar";
import herocard from "/card/hero-card2.png";

function Hero() {
  return (
    <div className="relative w-screen lg:h-screen overflow-hidden">
      <img
        src={hero}
        className="absolute right-0 top-0 w-full lg:w-[800px]   object-cover -z-50"
        alt="Hero Background"
      />
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center container pl-2 lg:pl-10 pt-10 lg:pt-0">
        <div className="flex-1 lg:order-2 mb-10 lg:mb-0">
          <img
            src={herocard}
            className="w-full lg:w-[580px] h-auto"
            alt="Hero Card"
          />
        </div>
        <div className="flex-1 lg:order-1">
          <h2 className="font-bold relative text-[35px] lg:text-[60px] lg:w-[520px]">
            Pruvatag Akıllı Dijital Kartvizit
            <span className="border-b-[16px] border-red-100 absolute bottom-2 left-0 w-[300px] lg:w-[520px] -z-50"></span>
          </h2>

          <p className="text-[15px] lg:text-lg w-full text-zinc-500 pt-5 lg:w-[520px]">
            Pruvatag; dijital kartvizit, iletişim bilgilerinizi, sosyal medya
            bilgilerinizi ve çok daha fazlasını bir uygulamaya ihtiyaç duymadan
            herhangi bir akıllı telefona temassız hızlı bir şekilde aktarmanıza
            olanak tanır.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
