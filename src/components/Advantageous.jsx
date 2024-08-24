import React, { useEffect, useState } from "react";

function Advantageous() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Pencere boyutu değiştiğinde boyutu kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ekran boyutuna göre icon boyutunu belirle
  const iconSize = isLargeScreen ? "125px" : "100px";
  return (
    <div className="container my-20">
      <div>
        <div className="text-center">
          <span className="py-2 px-4 text-xs bg-blue-100 text-blue-600 rounded-3xl font-medium ">
            NEDEN PRUVATAG ?
          </span>
          <h3 className="text-[35px] lg:text-5xl font-bold py-10">
            Daha Güçlü Bir İmaj
          </h3>
        </div>

        <div className="flex-col lg:flex lg:flex-row lg:space-x-5 container w-[90%]">
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Kalıcı Bağlantılar</h3>
            <p className="text-[15px] text-zinc-800">
              Pruvatag ile iletişim bilgilerinizi akılda kalıcı bir şekilde
              paylaşır ve güçlü bir ilk izlenim bırakırsınız. Dijital akıllı
              kartvizit tanıştığınız insanlar için ilgi çekici ve unutulmaz bir
              deneyim sunar.
            </p>
          </div>
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/arpadbri.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Doğayı Koru</h3>
            <p className="text-[15px]">
              Artık eski kağıt kartvizitlere veda etmenin, çevre üzerindeki
              etkilerinizi azaltmanın zamanı. Çevre dostu Pruvatag, farkınızı
              ortaya koyarak markanıza sürdürülebilir yeşil değer katar.
            </p>
          </div>
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/gqzfzudq.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Sınırsız Paylaşım</h3>
            <p className="text-[15px]">
              Pruvatag, ihtiyacınız olan tek kartvizit! Tüm iletişim
              bilgilerinizi sınırsız bir şekilde paylaşırsınız. Kartvizitleriniz
              bir daha asla bitmez.
            </p>
          </div>
        </div>
        <div className="flex-col lg:flex lg:flex-row lg:space-x-5 container mt-5 w-[90%]">
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/yzctygpq.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Temassız İletişim</h3>
            <p className="text-[15px] text-zinc-800">
              Sosyal medya hesapları, web site, şirket ve banka hesap bilgileri,
              katalog ve daha fazlasını anında paylaşın.
            </p>
          </div>
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/qhviklyi.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Maliyetleri Düşür</h3>
            <p className="text-[15px]">
              Bilgileriniz her değiştiğinde yeni kartvizit almak zorunda
              kalmayarak, zamandan ve maliyetten tasarruf edin.
            </p>
          </div>
          <div className="rounded-md flex flex-col p-5 gap-y-3 text-center basis-1/3 shadow-xl">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/vtgwital.json"
                trigger="loop"
                colors="primary:#121331,secondary:#16a9c7"
                style={{ width: iconSize, height: iconSize }}
              ></lord-icon>
            </div>
            <h3 className="text-lg font-medium">Bilgileri Güncelleyin</h3>
            <p className="text-[15px]">
              Bilgilerinizi istediğiniz zaman düzenleyip kart bilgilerini anında
              değiştirin. Yeni profilinizi hızlı bir şekilde herkesle paylaşın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantageous;
