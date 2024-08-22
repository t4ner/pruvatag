import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.png";
import telegram from "/socialMediaLogo/telegram.png";
import twitter from "/socialMediaLogo/x.jpg";
import vCard from "vcf";
import axios from "axios";
import linkedin from "/staticThemePhoto/linkedin.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import rehber from "/staticThemePhoto/rehber.png";
import email from "/staticThemePhoto/email.png";
import call from "/staticThemePhoto/call.png";
import website from "/socialMediaLogo/webs.png";
import sahibinden from "/socialMediaLogo/sahibinden.png";
import facebook from "/socialMediaLogo/facebookk.svg";
import discord2 from "/socialMediaLogo/discord.png";
import youtube from "/socialMediaLogo/youtube.png";
import amazonn from "/socialMediaLogo/amazonn.png";
import n11 from "/socialMediaLogo/n11.jpg";
import getir from "/socialMediaLogo/getir.jpg";
import pttavm from "/socialMediaLogo/pttavm.png";
import facebook2 from "/socialMediaLogo/face.png";
import whatshapbus from "/socialMediaLogo/whatshapbus.png";
import ciceksepeti from "/socialMediaLogo/ciceksepetii.png";
import hepsiburada from "/socialMediaLogo/hepsiburada.png";
import trendyol from "/socialMediaLogo/trendyol.png";
import map from "/socialMediaLogo/maps.png";
import wechat from "/socialMediaLogo/wechat.svg";

import { FaAddressCard, FaCreditCard, FaLink, FaQrcode } from "react-icons/fa6";
import { IoBook, IoClose } from "react-icons/io5";
import { FaListAlt, FaShareAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "ldrs/quantum";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsFillImageFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Theme1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isBankaBilgileriOpen, setIsBankaBilgileriOpen] = useState(false);

  const toggleBankaBilgileri = () => {
    setIsBankaBilgileriOpen(!isBankaBilgileriOpen);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };
  const [isVekaletBilgileriOpen, setIsVekaletBilgileriOpen] = useState(false);

  const toggleVekaletBilgileri = () => {
    setIsVekaletBilgileriOpen(!isVekaletBilgileriOpen);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };
  const [isGaleriBilgileriOpen, setIsGaleriBilgileriOpen] = useState(false);

  const toggleGaleriBilgileri = () => {
    setIsGaleriBilgileriOpen(!isGaleriBilgileriOpen);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };

  const [isKatalogBilgileriOpen, setIsKatalogBilgileriOpen] = useState(false);

  const toggleKatalogBilgileri = () => {
    setIsKatalogBilgileriOpen(!isKatalogBilgileriOpen);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };

  const [isFaturaBilgileriOpen, setIsFaturaBilgileriOpen] = useState(false);

  const toggleFaturaBilgileri = () => {
    setIsFaturaBilgileriOpen(!isFaturaBilgileriOpen);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };

  const [isLinkBilgileriOpen, setIsLinkBilgileriOpen] = useState(false);

  const toggleLinkBilgileri = () => {
    setIsLinkBilgileriOpen(!isLinkBilgileriOpen);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };

  const [isQrcodeBilgileriOpen, setIsQrcodeBilgileriOpen] = useState(false);

  const toggleQrcodeBilgileri = () => {
    setIsQrcodeBilgileriOpen(!isQrcodeBilgileriOpen);
    setIsBankaBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };

  const closeFooter = () => {
    setIsBankaBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
    setIsLinkBilgileriOpen(false);
  };
  const [themeInfo, setThemeInfo] = useState("");
  const [digitalCardId, setDigitalCardId] = useState("");
  const [bankaInformation, setBankaInformation] = useState("");
  const [invoiceInformation, setInvoiceInformation] = useState("");
  const [warrantInformation, setWarrantInformation] = useState("");
  const [catalogInformation, setCatalogInformation] = useState("");
  const [linkInformation, setLinkInformation] = useState("");

  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [gallerys, setGallerys] = useState([]);
  const urlToShare = `https://ecoqrcode.com/${themeInfo.linkId}`;

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const username = url.split("/").pop();

        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByLinkId?linkId=${username}`
        );
        if (!response.data || !response.data.linkId) {
          // Veri yoksa veya linkId yoksa yönlendirme yap
          navigate("/notfound");
          return;
        }
        setThemeInfo(response.data);
        setDigitalCardId(response.data.id);

        if (response.data && response.data.linkId) {
          const photosResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getPhotosByLink?linkId=${response.data.linkId}`
          );
          setPhotos(photosResponse.data);
        }

        if (response.data && response.data.linkId) {
          const galleryResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getGalleryPhotosByLink?linkId=${response.data.linkId}`
          );
          setGallerys(galleryResponse.data);
        }

        if (response.data && response.data.id) {
          const bankInformationResponse = await axios.get(
            `https://ecoqrcode.com/bankInformation/getBankInformationDigitalCardId?digitalCardId=${response.data.id}`
          );
          setBankaInformation(bankInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const invoiceInformationResponse = await axios.get(
            `https://ecoqrcode.com/invoiceInformation/getInvoiceInformationByDigitalCardId?digitalCardId=${response.data.id}`
          );
          setInvoiceInformation(invoiceInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const warrantInformationResponse = await axios.get(
            `https://ecoqrcode.com/warrantOfAttorney/getWarrantOfAttorneyByDigitalCardId?digitalCardId=${response.data.id}`
          );
          setWarrantInformation(warrantInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const linkInformationResponse = await axios.get(
            `https://ecoqrcode.com/linkInformation/getLinkInformationByDigitalCardId?digitalCardId=${response.data.id}`
          );
          setLinkInformation(linkInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const catalogInformationResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getCatalogByLink?linkId=${response.data.linkId}`
          );
          setCatalogInformation(catalogInformationResponse.data);
        }
      } catch (error) {
      } finally {
        setLoading(false); // Veri yüklendiğinde loading'i kapat
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <l-quantum size="110" speed="1.75" color="green"></l-quantum>
      </div>
    );
  }

  const convertTurkishToEnglish = (text) => {
    const turkishToEnglishMap = {
      ı: "i",
      İ: "I",
      ş: "s",
      Ş: "S",
      ç: "c",
      Ç: "C",
      ğ: "g",
      Ğ: "G",
      ü: "u",
      Ü: "U",
      ö: "o",
      Ö: "O",
    };

    return text.replace(
      /[ıİşŞçÇğĞüÜöÖ]/g,
      (match) => turkishToEnglishMap[match]
    );
  };

  const downloadVCF = () => {
    if (!themeInfo) return;

    const { name, surname, email: emailAddress, phoneNumber1 } = themeInfo;
    const formattedPhoneNumber = phoneNumber1.replace(/\s/g, "");

    // Türkçe karakterleri İngilizce karakterlere çevir
    const englishName = convertTurkishToEnglish(name);
    const englishSurname = convertTurkishToEnglish(surname);

    // Konsol çıktısı
    console.log("English Name:", englishName);
    console.log("English Surname:", englishSurname);

    // VCF içeriğini oluştur
    const vcfContent = generateVCF(
      `${englishName} ${englishSurname}`, // İsim ve soyadı İngilizceye çevir
      emailAddress,
      formattedPhoneNumber
    );

    try {
      const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "contact.vcf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Temizlik
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating or downloading VCF:", error);
    }
  };

  const generateVCF = (name, email, phone) => {
    // vCard kütüphanesinin doğru şekilde yüklendiğinden emin olun
    try {
      const vcard = new vCard();
      vcard.add("fn", name);
      vcard.add("email", email);
      vcard.add("tel", phone);

      return vcard.toString();
    } catch (error) {
      console.error("Error generating VCF:", error);
      return "";
    }
  };
  if (!themeInfo) {
    return null;
  }
  const profilPhoto = photos.find((photo) => photo.name === "profilphoto");
  const bannerPhoto = photos.find((photo) => photo.name === "banner");
  const qrCode = photos.find((photo) => photo.name === "QRCode.png");
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Kullanıcıya başarılı bildirimi göster
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "IBAN KOPYALANDI!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "swal-title",
          },
        });
      })
      .catch((err) => {
        console.error("IBAN kopyalanırken hata oluştu:", err);
        // Kullanıcıya hata bildirimi göster
        Swal.fire({
          icon: "error",
          title: "Kopyalama Başarısız!",
          text: "IBAN bilgisi kopyalanırken bir hata oluştu. Lütfen tekrar deneyin.",
          confirmButtonText: "Tamam",
        });
      });
  }
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + gallerys.length) % gallerys.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % gallerys.length;
    setCurrentIndex(newIndex);
  };
  const handleShareCard = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "ecoQr Dijital Kartvizitim",
          url: urlToShare,
        })
        .then(() => console.log("Başarıyla paylaşıldı!"))
        .catch((error) => console.error("Paylaşım başarısız:", error));
    } else {
      alert("Paylaşım özelliği bu tarayıcıda desteklenmiyor.");
    }
  };

  const handleShareQr = async () => {
    // 1. QR kodunu bulma
    const qrCode = photos.find((photo) => photo.name === "QRCode.png");

    if (!qrCode) {
      console.error("QR Kodu bulunamadı.");
      return;
    }

    // 2. Resmi Blob olarak almak
    try {
      const response = await fetch(qrCode.url); // `qrCode.url` resim URL'si olmalıdır
      const imageBlob = await response.blob();

      // 3. Blob'dan bir File nesnesi oluşturma
      const imageFile = new File([imageBlob], qrCode.name, {
        type: imageBlob.type,
      });

      // 4. Paylaşım verilerini oluşturma
      const shareData = {
        title: "ecoQr Dijital Kartvizitim",
        files: [imageFile],
      };

      // Paylaşım işlemi
      if (navigator.share) {
        try {
          await navigator.share(shareData);
          console.log("Başarıyla paylaşıldı!");
        } catch (error) {
          console.error("Paylaşım başarısız:", error);
        }
      } else {
        alert("Paylaşım özelliği bu tarayıcıda desteklenmiyor.");
      }
    } catch (error) {
      console.error("Resim indirme başarısız:", error);
    }
  };
  const getFullUrl = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }
    return link;
  };
  console.log("themeInfo", themeInfo);
  return (
    <div className="md:w-2/4 mx-auto font-montserrat">
      <div className="flex justify-between px-2 py-2">
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={toggleQrcodeBilgileri}
          >
            <FaQrcode className="text-xl mr-1" />
            <div className="text-sm font-semibold">QR Code</div>
          </button>
        </div>
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={handleShareCard}
          >
            <FaShareAlt className="text-xl mr-1" />
            <div className="text-sm font-semibold">Paylaş</div>
          </button>
        </div>
      </div>
      {themeInfo.themeId === 1 && (
        <div className="">
          {/*banner start*/}
          <div className="h-[230px] md:h-[450px] w-full">
            {bannerPhoto && (
              <img
                src={bannerPhoto.url}
                className="object-fill h-full w-full"
                alt="Banner"
              />
            )}
          </div>
          {/* banner finish */}
          <div className="relative bg-zinc-200 h-auto py-4 w-full shadow-lg">
            <div className="absolute bottom-1/2 left-2">
              {profilPhoto && (
                <img
                  src={profilPhoto.url}
                  className="rounded-full object-cover w-28 h-28 md:w-32 md:h-32"
                  alt="Profil"
                />
              )}
            </div>
            <div className="mx-auto text-center pl-28 ">
              <h2 className="text-xl font-medium ">
                {themeInfo.name} {themeInfo.surname}
              </h2>
              <h4 className="text-lg font-medium text-gray-600">
                {themeInfo.description}
              </h4>
              <h4 className="text-lg font-medium text-gray-600">
                {themeInfo.title}
              </h4>
            </div>
          </div>

          {/* social media links start*/}
          <div className="mt-10 flex flex-wrap gap-y-10 pb-10">
            <div className="basis-1/3">
              <a
                className="flex flex-col items-center cursor-pointer"
                onClick={downloadVCF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={rehber}
                  className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                />
                <span className="font-medium text-sm md:text-base mt-1">
                  Rehbere ekle
                </span>
              </a>
            </div>
            {themeInfo.email !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={`mailto:${themeInfo.email}`}
                >
                  <img
                    src={email}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Email
                  </span>
                </a>
              </div>
            )}

            <div className="basis-1/3">
              <a
                className="flex flex-col items-center"
                target="_blank"
                href={`tel:${themeInfo.phoneNumber1}`}
              >
                {" "}
                <img
                  src={call}
                  className="w-[56px] h-[56px] overflow-hidden drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                />
                <span className="font-medium text-sm md:text-base mt-1">
                  Ara
                </span>
              </a>
            </div>

            {themeInfo.location !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={getFullUrl(themeInfo.location)}
                >
                  {" "}
                  <img
                    src={map}
                    className="w-[55px] h-[55px] overflow-hidden drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Harita
                  </span>
                </a>
              </div>
            )}

            {themeInfo.linkedin !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={getFullUrl(themeInfo.linkedin)}
                >
                  {" "}
                  <img
                    src={linkedin}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Linkedin
                  </span>
                </a>
              </div>
            )}

            {themeInfo.whatsapp !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsapp.replace(
                    /\s/g,
                    ""
                  )}`}
                >
                  <img
                    src={whatsapp}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Whatsapp
                  </span>
                </a>
              </div>
            )}

            {themeInfo.website !== "" && (
              <div className="basis-1/3 ">
                <a
                  className="flex flex-col items-center"
                  href={getFullUrl(themeInfo.website)}
                  target="_blank"
                >
                  <img
                    src={website}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Website
                  </span>
                </a>
              </div>
            )}
            {themeInfo.instagram !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.instagram)}
                  target="_blank"
                >
                  <img
                    src={instagram}
                    className="w-[63px] h-[63px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base">
                    Instagram
                  </span>
                </a>
              </div>
            )}
            {themeInfo.twitter !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.twitter)}
                  target="_blank"
                >
                  <img
                    src={twitter}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1.5 ">
                    Twitter
                  </span>
                </a>
              </div>
            )}

            {themeInfo.telegram !== "" && (
              <div className="basis-1/3 ">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.telegram)}
                  target="_blank"
                >
                  <img
                    src={telegram}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Telegram
                  </span>
                </a>
              </div>
            )}

            {themeInfo.discord !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.discord)}
                  target="_blank"
                >
                  <img
                    src={discord2}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Discord
                  </span>
                </a>
              </div>
            )}
            {themeInfo.facebook !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  href={getFullUrl(themeInfo.facebook)}
                  target="_blank"
                >
                  <img
                    src={facebook2}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Facebook
                  </span>
                </a>
              </div>
            )}
            {themeInfo.whatsappBusiness !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsappBusiness.replace(
                    /\s/g,
                    ""
                  )}`}
                  target="_blank"
                >
                  <img
                    src={whatshapbus}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Whatsapp
                  </span>
                </a>
              </div>
            )}
            {themeInfo.youtube !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.youtube)}
                  target="_blank"
                >
                  <img
                    src={youtube}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    YouTube
                  </span>
                </a>
              </div>
            )}
            {themeInfo.wechat !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={getFullUrl(themeInfo.wechat)}
                >
                  <img
                    src={wechat}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Wechat
                  </span>
                </a>
              </div>
            )}
            {themeInfo.sahibinden !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.sahibinden)}
                  target="_blank"
                >
                  <img
                    src={sahibinden}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Sahibinden
                  </span>
                </a>
              </div>
            )}
            {themeInfo.cicekSepeti !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.cicekSepeti)}
                  target="_blank"
                >
                  <img
                    src={ciceksepeti}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Çiçek Sepeti
                  </span>
                </a>
              </div>
            )}
            {themeInfo.hepsiburada !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.hepsiburada)}
                  target="_blank"
                >
                  <img
                    src={hepsiburada}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Hepsiburada
                  </span>
                </a>
              </div>
            )}
            {themeInfo.trendyol !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.trendyol)}
                  target="_blank"
                >
                  <img
                    src={trendyol}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Trendyol
                  </span>
                </a>
              </div>
            )}

            {themeInfo.getir !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.getir)}
                  target="_blank"
                >
                  <img
                    src={getir}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Getir
                  </span>
                </a>
              </div>
            )}

            {themeInfo.n11 !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.n11)}
                  target="_blank"
                >
                  <img
                    src={n11}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    N11
                  </span>
                </a>
              </div>
            )}

            {themeInfo.amazon !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.amazon)}
                  target="_blank"
                >
                  <img
                    src={amazonn}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Amazon
                  </span>
                </a>
              </div>
            )}

            {themeInfo.epttAvm !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={getFullUrl(themeInfo.epttAvm)}
                  target="_blank"
                >
                  <img
                    src={pttavm}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_7px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    PttAVM
                  </span>
                </a>
              </div>
            )}
          </div>
          {/* social media links finish*/}
        </div>
      )}
      {themeInfo.themeId === 2 && (
        <div className="md:w-5/6 mx-auto px-3 pb-5">
          {/* banner start */}
          <div className="flex items-center p-5 justify-between">
            {profilPhoto && (
              <img
                src={profilPhoto.url}
                className="rounded-full object-cover w-28 h-28"
                alt="Profil"
              />
            )}
            <div className="text-center pr-5 text-lg font-semibold">
              <h2 className="uppercase">{themeInfo.name}</h2>
              <h2 className="uppercase">{themeInfo.surname}</h2>
            </div>
          </div>
          {/* banner end */}
          {/* descriptin start */}
          <div className="border rounded-md shadow-lg border-zinc-500 text-center text-lg font-semibold  py-2">
            <p className="uppercase">{themeInfo.description}</p>
            <p className="uppercase text-zinc-500">{themeInfo.title}</p>
          </div>
          {/* description end */}
          {themeInfo?.firm && (
            <div className="border rounded-md mt-5 shadow-lg border-zinc-500 text-center text-lg font-semibold  py-2">
              <p className="uppercase">HAKKIMDA</p>
              <p className="uppercase text-zinc-500 px-1">{themeInfo.firm}</p>
            </div>
          )}
          {/* iletişim start */}
          <div className="border shadow-lg rounded-md border-zinc-500 text-center text-lg font-semibold  py-2 mt-5">
            <p>İLETİŞİM</p>
            <div className="flex mt-5 justify-center">
              <div className="basis-1/4">
                <a
                  className="flex flex-col items-center"
                  onClick={downloadVCF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={rehber} className="w-16" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Rehbere ekle
                  </span>
                </a>
              </div>

              {themeInfo.email !== "" && (
                <div className="basis-1/4">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={`mailto:${themeInfo.email}`}
                  >
                    <img src={email} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Email
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.phoneNumber1 !== "" && (
                <div className="basis-1/4">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={`tel:${themeInfo.phoneNumber1}`}
                  >
                    {" "}
                    <img src={call} className="w-[67px]" />
                    <span className="font-medium text-sm md:text-base mt-0.5">
                      Ara
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.location !== "" && (
                <div className="basis-1/4">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={getFullUrl(themeInfo.location)}
                  >
                    {" "}
                    <img src={map} className="w-[63px] pt-0.5" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Harita
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* iletişim finish */}
          {/* social media start */}
          <div className="border shadow-lg rounded-md border-zinc-500 text-center text-lg font-semibold  py-2 my-5">
            <p>SOSYAL MEDYA</p>
            <div className="flex flex-wrap items-center mt-5 gap-y-5">
              {themeInfo.linkedin !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={getFullUrl(themeInfo.linkedin)}
                  >
                    {" "}
                    <img src={linkedin} className="w-[62px]" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Linkedin
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.whatsapp !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsapp.replace(
                      /\s/g,
                      ""
                    )}`}
                  >
                    <img src={whatsapp} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Whatsapp
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.instagram !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.instagram)}
                    target="_blank"
                  >
                    <img src={instagram} className="w-[69px]" />
                    <span className="font-medium text-sm md:text-base">
                      Instagram
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.twitter !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.twitter)}
                    target="_blank"
                  >
                    <img src={twitter} className="w-16 h-[67px] rounded-lg" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Twitter
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.telegram !== "" && (
                <div className="basis-1/3 ">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.telegram)}
                    target="_blank"
                  >
                    <img src={telegram} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Telegram
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.website !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.website)}
                    target="_blank"
                  >
                    <img src={website} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Website
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.discord !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.discord)}
                    target="_blank"
                  >
                    <img src={discord2} className="w-16 rounded-lg" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Discord
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.facebook !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.facebook)}
                    target="_blank"
                  >
                    <img src={facebook} className="w-[62px]" />
                    <span className="font-medium text-sm md:text-base mt-2">
                      Facebook
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.youtube !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.youtube)}
                    target="_blank"
                  >
                    <img src={youtube} className="w-[62px]" />
                    <span className="font-medium text-sm md:text-base mt-2">
                      Youtube
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.whatsappBusiness !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsappBusiness.replace(
                      /\s/g,
                      ""
                    )}`}
                    target="_blank"
                  >
                    <img src={whatshapbus} className="w-[70px]" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Whatsapp
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.wechat !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={getFullUrl(themeInfo.wechat)}
                    target="_blank"
                  >
                    <img src={wechat} className="w-[70px]" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Wechat
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* social media finish */}
          {(themeInfo.sahibinden ||
            themeInfo.cicekSepeti ||
            themeInfo.hepsiburada ||
            themeInfo.trendyol) && (
            <div className="border shadow-lg rounded-md border-zinc-500 text-center text-lg font-semibold  py-2 mt-5 ">
              <p>PAZAR YERLERİ</p>
              <div className="flex flex-wrap mt-5  gap-y-6">
                <>
                  {themeInfo.sahibinden !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.sahibinden)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={sahibinden} className="w-16 rounded-lg" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          Sahibinden
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.cicekSepeti !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.cicekSepeti)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={ciceksepeti} className="w-16" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          Çiçek Sepeti
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.hepsiburada !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.hepsiburada)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={hepsiburada} className="w-16" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          Hepsiburada
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.trendyol !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.trendyol)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={trendyol} className="w-16 rounded-lg" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          Trendyol
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.amazon !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.amazon)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={amazonn} className="w-16 rounded-lg" />
                        <span className="font-medium text-sm md:text-base mt-2">
                          Amazon
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.n11 !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.n11)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={n11} className="w-16 rounded-md" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          N11
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.getir !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.getir)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={getir} className="w-16 rounded-md" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          Getir
                        </span>
                      </a>
                    </div>
                  )}
                  {themeInfo.epttAvm !== "" && (
                    <div className="basis-1/4">
                      <a
                        className="flex flex-col items-center"
                        href={getFullUrl(themeInfo.epttAvm)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={pttavm} className="w-16 rounded-lg" />
                        <span className="font-medium text-sm md:text-base mt-1">
                          PttAVM
                        </span>
                      </a>
                    </div>
                  )}
                </>
              </div>
            </div>
          )}{" "}
          {/* iletişim finish */}
        </div>
      )}
      <div className="pt-14">
        <footer className="footer flex items-center justify-around py-2">
          {bankaInformation[0]?.iban && (
            <div>
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium space-y-0.5"
                onClick={toggleBankaBilgileri}
              >
                <FaCreditCard size={24} />
                <span>Banka</span>
              </button>

              <div
                className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                  isBankaBilgileriOpen ? "open" : ""
                }`}
              >
                <div>
                  <div className="text-end">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  <h4 className="font-semibold pb-2 border-b-2 mb-3">
                    BANKA BİLGİLERİ
                  </h4>
                  {bankaInformation.map((bank) => {
                    const handleShare = () => {
                      if (navigator.share) {
                        navigator
                          .share({
                            text: `${bank.iban}`,
                          })
                          .then(() => console.log("Başarıyla paylaşıldı!"))
                          .catch((error) =>
                            console.error("Paylaşım başarısız:", error)
                          );
                      } else {
                        alert(
                          "Paylaşım özelliği bu tarayıcıda desteklenmiyor."
                        );
                      }
                    };

                    return (
                      <div className="space-y-2 py-1 pb-4" key={bank.iban}>
                        <div className="font-semibold">{bank.iban}</div>
                        <div className="font-medium text-sm">
                          {bank.bankName}
                        </div>
                        <div className="font-medium text-sm">
                          {bank.accountName}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-medium focus:outline-none "
                            onClick={handleShare}
                          >
                            PAYLAŞ
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {gallerys[0]?.linkId && (
            <div className="overflow-hidden">
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium  space-y-0.5"
                onClick={toggleGaleriBilgileri}
              >
                <BsFillImageFill size={23} />
                <p>Galeri</p>
              </button>

              <div
                className={`banka-bilgileri ${
                  isGaleriBilgileriOpen ? "open" : ""
                }`}
              >
                {/* galeri */}
                <div className="h-[330px] md:h-[400px] md:w-[600px] w-full m-auto relative group overflow-hidden bg-white rounded-2xl ">
                  <div className="absolute top-1 right-1 z-50">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  {gallerys.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Image ${index}`}
                      className={`w-full h-full  md:h-[400px] md:w-[600px] rounded-2xl absolute top-0 left-0 transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        zIndex: index === currentIndex ? 1 : 0,
                      }}
                    />
                  ))}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 left-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer z-10"
                    onClick={prevSlide}
                  >
                    <BsChevronCompactLeft size={30} />
                  </div>
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer z-10"
                    onClick={nextSlide}
                  >
                    <BsChevronCompactRight size={30} />
                  </div>
                </div>
                {/* galeri */}
              </div>
            </div>
          )}
          {linkInformation[0]?.link && (
            <div>
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium  space-y-0.5"
                onClick={toggleLinkBilgileri}
              >
                <FaLink size={26} />
                Bağlantı
              </button>

              <div
                className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                  isLinkBilgileriOpen ? "open" : ""
                }`}
              >
                <div className="pb-2">
                  <div className="text-end">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  <h4 className="font-semibold pb-2 border-b-2 mb-3">
                    BAĞLANTILAR
                  </h4>
                  {linkInformation.map((link) => {
                    return (
                      <div
                        className="space-y-2 border-b-2 py-2"
                        key={link.title}
                      >
                        <div>
                          <div className="font-medium ">{link.title}</div>
                          <div>
                            <a href={getFullUrl(link.link)} target="_blank">
                              {link.link}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {catalogInformation[0]?.linkId && (
            <div>
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium  space-y-0.5"
                onClick={toggleKatalogBilgileri}
              >
                <IoBook size={25} />
                Katalog
              </button>

              <div
                className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                  isKatalogBilgileriOpen ? "open" : ""
                }`}
              >
                <div className="pb-2">
                  <div className="text-end">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  <h4 className="font-semibold pb-2 border-b-2 mb-3">
                    KATALOG
                  </h4>
                  {catalogInformation.map((catalog) => {
                    return (
                      <div
                        className="space-y-2 border-b-2 py-2"
                        key={catalog.name}
                      >
                        <a
                          href={catalog.url}
                          target="_blank"
                          className="font-medium text-sm"
                        >
                          <div className="font-semibold">{catalog.name}</div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {invoiceInformation[0]?.digitalCardId && (
            <div>
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium  space-y-0.5"
                onClick={toggleFaturaBilgileri}
              >
                <FaListAlt size={23} />
                Fatura
              </button>

              <div
                className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                  isFaturaBilgileriOpen ? "open" : ""
                }`}
              >
                <div>
                  <div className="text-end">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  <h4 className="font-semibold pb-2 border-b-2 mb-3">
                    FATURA BİLGİLERİ
                  </h4>
                  {invoiceInformation.map((invoice) => {
                    const shareInvoice = async (invoice) => {
                      if (navigator.share) {
                        try {
                          await navigator.share({
                            text: `Fatura Başlığı: ${invoice.title}\n Vergi Numarası: ${invoice.taxNumber}\nVergi Ofisi: ${invoice.taxOffice}\nFatura Adresi: ${invoice.address}`,
                          });
                          console.log("Invoice shared successfully");
                        } catch (error) {
                          console.error("Error sharing invoice:", error);
                        }
                      } else {
                        alert(
                          "Web Share API is not supported in your browser."
                        );
                      }
                    };
                    return (
                      <div className="space-y-2 py-1" key={invoice.title}>
                        <div className="font-semibold">{invoice.title}</div>
                        <div className="font-medium text-sm">
                          Vergi numarası: {invoice.taxNumber}
                        </div>
                        <div className="font-medium text-sm">
                          Vergi dairesi: {invoice.taxOffice}
                        </div>
                        <div className="font-medium text-sm">
                          Adres: {invoice.address}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-medium focus:outline-none"
                            onClick={() => shareInvoice(invoice)}
                          >
                            PAYLAŞ
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {warrantInformation[0]?.digitalCardId && (
            <div>
              <button
                className="banka-button flex flex-col items-center justify-center  text-xs font-medium  space-y-0.5"
                onClick={toggleVekaletBilgileri}
              >
                <FaAddressCard size={26} />
                Vekalet
              </button>

              <div
                className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                  isVekaletBilgileriOpen ? "open" : ""
                }`}
              >
                <div>
                  <div className="text-end">
                    <button
                      onClick={closeFooter}
                      className="bg-red-600 rounded-md text-white"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                  <h4 className="font-semibold pb-2 border-b-2 mb-3">
                    VEKALET BİLGİLERİ
                  </h4>
                  {warrantInformation.map((warrant) => {
                    const shareWarrant = async (warrant) => {
                      if (navigator.share) {
                        try {
                          await navigator.share({
                            text: `Vekalet Başlığı: ${warrant.title}\n Vekalet Kimliği: ${warrant.citizenId}\nVekalet Baro Numarası: ${warrant.barAssociation}\nVekalet Adresi: ${warrant.address}`,
                          });
                          console.log("warrant shared successfully");
                        } catch (error) {
                          console.error("Error sharing warrant:", error);
                        }
                      } else {
                        alert(
                          "Web Share API is not supported in your browser."
                        );
                      }
                    };
                    return (
                      <div className="space-y-2 py-1" key={warrant.title}>
                        <div className="font-semibold">{warrant.title}</div>
                        <div className="font-medium text-sm">
                          {warrant.citizenId}
                        </div>
                        <div className="font-medium text-sm">
                          {warrant.registerNo}
                        </div>
                        <div className="font-medium text-sm">
                          {warrant.barAssociation}
                        </div>
                        <div className="font-medium text-sm">
                          Adres: {warrant.address}
                        </div>
                        <button
                          className="px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-medium focus:outline-none"
                          onClick={() => shareWarrant(warrant)}
                        >
                          PAYLAŞ
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          <div
            className={`banka-bilgileri p-5 border bg-white shadow-xl ${
              isQrcodeBilgileriOpen ? "open" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="flex-grow">
                <div className="text-end">
                  <button
                    onClick={closeFooter}
                    className="bg-red-600 rounded-md text-white"
                  >
                    <IoClose size={24} />
                  </button>
                </div>
                <div className=" md:h-[400px] 2xl:h-[700px] 2xl:w-[700px] md:mx-auto md:w-[400px] ">
                  <img
                    src={qrCode.url}
                    className="w-full h-full p-5 object-cover rounded-md"
                  />
                </div>
                <div className="text-sm font-semibold  w-full text-end flex-end">
                  <button
                    className="py-1 rounded text-end flex"
                    onClick={handleShareQr}
                  >
                    <FaShareAlt className="text-xl mr-1 " />
                    <div className="text-sm font-semibold ">Paylaş</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Theme1;
