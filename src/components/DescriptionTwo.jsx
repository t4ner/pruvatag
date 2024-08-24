import React from "react";
import descriptioncard from "/card/descriptiontwo2.png";
function DescriptionTwo() {
  return (
    <div className=" pl-10 mt-10 relative">
      <div className="flex justify-between items-center gap-x-16 w-[83%] container">
        <div className="basis-1/2">
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium ">
            PRUVATAG
          </span>
          <div>
            <h3 className="text-[45px] font-bold py-5">Pruvatag'ı Keşfet</h3>
            <p className="text-[15px] text-gray-800">
              Karbon ayak izinizi düşürün. Her yıl 600 ton’a varan CO2
              tüketimine engel olun. Dilediğiniz zaman tüm bilgilerinizi
              güncelleyerek yeniden kartvizit bastırma derdine son verin!
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-[45px] font-bold py-5">Yeşil Teknoloji</h3>
            <p className="text-[15px] text-gray-800">
              Pruvatag, kullanarak binlerce kartvizit baskısı yaptırmak zorunda
              kalmayın, unutulan, güncellenemeyen ve verdiğiniz kişiler
              tarafından çöpe atılan kartvizitler yüzünden oluşan tonlarca atık
              kağıda engel olup, doğaya katkıda bulunun.
            </p>
          </div>
        </div>
        <div className="">
          <img src={descriptioncard} className="w-[900px]" />
        </div>
      </div>
    </div>
  );
}

export default DescriptionTwo;
