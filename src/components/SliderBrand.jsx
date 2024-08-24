import React from "react";
import logo1 from "/sliderLogo/sliderlogo1.svg";
import logo2 from "/sliderLogo/sliderlogo2.svg";
import logo3 from "/sliderLogo/sliderlogo3.svg";
import logo4 from "/sliderLogo/sliderlogo4.svg";
import logo5 from "/sliderLogo/sliderlogo5.svg";
import logo6 from "/sliderLogo/sliderlogo6.svg";
import logo7 from "/sliderLogo/sliderlogo7.svg";
import logo8 from "/sliderLogo/sliderlogo8.svg";
import logo9 from "/sliderLogo/sliderlogo9.svg";
import logo10 from "/sliderLogo/sliderlogo10.svg";
import logo11 from "/sliderLogo/sliderlogo11.svg";
import logo12 from "/sliderLogo/sliderlogo12.svg";
import logo13 from "/sliderLogo/sliderlogo13.svg";
import logo14 from "/sliderLogo/sliderlogo14.svg";
import logo15 from "/sliderLogo/sliderlogo15.svg";
import logo16 from "/sliderLogo/sliderlogo16.svg";
import logo17 from "/sliderLogo/sliderlogo17.svg";
import logo18 from "/sliderLogo/sliderlogo18.svg";
import logo19 from "/sliderLogo/sliderlogo19.svg";

function SliderBrand() {
  // Tüm logoları içeren bir dizi oluşturun
  const slides = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
  ];

  return (
    <div className="slider  h-[150px] m-auto overflow-hidden relative w-full pt-16 lg:pt-16 lg:py-40 pl-5 container">
      <div className="slide-track flex items-center  space-x-5 lg:space-x-20 pl-5">
        {/* Slides dizisini iki kez birleştirerek sonsuz kaydırma efekti oluşturun */}
        {slides.concat(slides).map((src, index) => (
          <div
            className="h-[115px] w-[230px] lg:h-[150px] lg:w-[300px] flex justify-center items-center"
            key={index}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderBrand;
