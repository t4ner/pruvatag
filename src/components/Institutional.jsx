import React from "react";
import institutional from "/card/institutional.png";
import insbg from "/bghero/ins-bg.png";
function Institutional() {
  return (
    <div className="  mt-10 relative">
      <img src={insbg} className="absolute right-0 top-28 -z-50" />
      <div className="flex items-center gap-x-20 w-[83%] container">
        <div>
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium ">
            KURUMSAL PRUVATAG
          </span>
          <h3 className="text-[45px] font-bold text-zinc-800 py-5">
            Kurumsal Sipariş
          </h3>
          <div className="text-gray-800 space-y-5 text-[15px]">
            <p>
              Pruvatag ile hayata geçirdiğimiz markanıza ve işletmenize
              sürdürülebilir kurumsal çözümler sunuyoruz.
            </p>
            <p>
              Bizimle yapacağınız iş birliği sayesinde markanıza, hedef
              kitlenizin ilgisini çekecek ve markanızı sektör paydaşlarınız
              arasından öne çıkaracak değer kazandırın.
            </p>
            <p>
              Şimdi bizimle iletişime geçin ve müşterileriniz ile bağınızı
              artıracak yeni nesil çözümlerle tanışın!
            </p>
          </div>
        </div>
        <div>
          <img src={institutional} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Institutional;
