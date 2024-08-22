import React from "react";
import descriptioncard from "/card/descriptiontwo.png";
function DescriptionTwo() {
  return (
    <div className=" pl-10 mt-10 relative">
      <div className="flex justify-between items-center gap-x-16 w-[83%] container">
        <div className="basis-1/2">
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium ">
            PRUVATAG
          </span>
          <div>
            <h3 className="text-[45px] font-bold py-5">
              Özel Tasarım ve QR Kod
            </h3>
            <p className="text-[15px] text-gray-800">
              Siyah, Beyaz, ve kişiselleştirebileceğiniz kart zemini üzerine
              logonuzu ekleyebilirsiniz.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-[45px] font-bold py-5">
              Kolay güncellenebilir
            </h3>
            <p className="text-[15px] text-gray-800">
              Bilgilerinizi saniyeler içinde güncelleyin.
            </p>
          </div>
        </div>
        <div className="">
          <img src={descriptioncard} className="w-[1000px]" />
        </div>
      </div>
    </div>
  );
}

export default DescriptionTwo;
