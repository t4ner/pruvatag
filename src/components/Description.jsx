import React from "react";
import descriptioncard from "/card/description.png";
function Description() {
  return (
    <div className="  mt-10 relative">
      <div className="flex justify-between items-center gap-x-16 w-[83%] container">
        <div className="">
          <img src={descriptioncard} className="w-[800px]" />
        </div>
        <div className="basis-1/2">
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium ">
            PRUVATAG
          </span>
          <div>
            <h3 className="text-[45px] font-bold py-5">Dijital Kartvizit</h3>
            <p className="text-[15px] text-gray-800">
              Yönetim panelinden sanal kartvizit oluşturun ve paylaşın.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-[45px] font-bold py-5">Veriniz Güvende</h3>
            <p className="text-[15px] text-gray-800">
              Bilgileriniz şifrelenerek saklanır. İstemediğiniz kimse göremez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
