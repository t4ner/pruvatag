import React from "react";
import descriptioncard from "/card/description2.png";

function Description() {
  return (
    <div className="mt-20 lg:mt-10 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-x-16 px-2 lg:px-0 lg:w-[83%] container">
        {/* Metin kısmı */}
        <div className="basis-1/2 lg:order-1">
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium">
            PRUVATAG
          </span>
          <div>
            <h3 className="text-[35px] lg:text-[45px] font-bold py-5">
              Bireysel Kartvizit
            </h3>
            <p className="text-[15px] text-gray-800">
              Firma bilgilerinizin yanı sıra kişisel bilgileriniz, sosyal medya
              hesaplarınızı ve fotoğrafınızı ilk defa tanıştığınız insanlarla
              paylaşarak etkili bir izlenim sağlayabilirsiniz.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-[35px] lg:text-[45px] font-bold py-5">
              Kurumsal Kartvizit
            </h3>
            <p className="text-[15px] text-gray-800">
              Firmanıza ait logo, web sitesi, katalog, galeri, e-ticaret
              bilgileri, banka hesap bilgileri, fatura bilgileri tek tuşla
              istediğiniz yere aktarabilirsiniz.
            </p>
          </div>
        </div>

        {/* Resim kısmı */}
        <div className=" lg:order-2">
          <img
            src={descriptioncard}
            className="w-full lg:w-[800px] h-auto"
            alt="Description Card"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
