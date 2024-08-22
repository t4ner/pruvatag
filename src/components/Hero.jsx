import React from "react";
import hero from "/bghero/bg-hero.png";
import Navbar from "./Navbar";
import herocard from "/card/hero-card.png";
function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-y-hidden">
      <img src={hero} className="absolute right-0 top-0 w-[750px] -z-50" />
      <Navbar />
      <div className="flex items-center container pl-5">
        <div className="basis-1/2">
          <div>
            <h2 className="font-bold relative text-[60px] w-[520px]">
              {" "}
              Pruvatag Card Akıllı Dijital Kartvizit
              <span className="border-b-[16px] border-red-100 absolute bottom-2 left-0 w-[520px]"></span>
            </h2>
            <p className=" w-[520px] text-lg text-zinc-500 pt-5">
              Pruvatag Card; dijital kartvizit, iletişim bilgilerinizi, sosyal
              medya bilgilerinizi ve çok daha fazlasını bir uygulamaya ihtiyaç
              duymadan herhangi bir akıllı telefona temassız hızlı bir şekilde
              aktarmanıza olanak tanır.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={herocard} className="w-[575px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
