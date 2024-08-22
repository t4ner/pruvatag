import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import youtube from "/socialMediaLogo/youtube.svg";

import ciceksepeti from "/socialMediaLogo/ciceksepeti.png";
import discord from "/socialMediaLogo/discord.svg";
import Swal from "sweetalert2";
import theme1 from "/themes/10.png";
import theme2 from "/themes/11.png";
import classNames from "classnames";
import wechat from "/socialMediaLogo/wechat.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function CardUpdate() {
  const navigate = useNavigate();
  const [bankaInformation, setBankaInformation] = useState([]);
  const [invoiceInformation, setInvoiceInformation] = useState([]);
  const [warrantInformation, setWarrantInformation] = useState([]);
  const [catalogInformation, setCatalogInformation] = useState([]);
  const [imagesInformation, setImagesInformation] = useState([]);
  const [linkInformation, setLinkInformation] = useState([]);

  const [profilPhoto, setProfilPhoto] = useState(null);
  const [bannerPhoto, setBannerPhoto] = useState(null);
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [catalog, setCatalog] = useState("");
  const [catalog2, setCatalog2] = useState("");
  const [catalog3, setCatalog3] = useState("");
  const [catalog4, setCatalog4] = useState("");
  const [imageAdded, setImageAdded] = useState(null);
  const [imageAdded2, setImageAdded2] = useState(null);

  const [values, setValues] = useState({
    id: "",
    linkId: "",
    themeId: 0,
    name: "",
    surname: "",
    title: "",
    description: "",
    email: "",
    twitter: "",
    instagram: "",
    website: "",
    wechat: "",
    phoneNumber1: "",
    phoneNumber2: "",
    whatsapp: "",
    linkedin: "",
    youtube: "",
    telegram: "",
    facebook: "",
    location: "",
    discord: "",
    whatsappBusiness: "",
    cicekSepeti: "",
    sahibinden: "",
    trendyol: "",
    hepsiburada: "",
    n11: "",
    amazon: "",
    getir: "",
    epttAvm: "",
    firm: "",
  });
  console.log("values", values);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("email");
        if (!userEmail) {
          return;
        }
        const token = localStorage.getItem("token");
        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByEmail?email=${userEmail}`
        );

        setValues({
          id: response.data.id || "",
          linkId: response.data.linkId || "",
          themeId: response.data.themeId,
          name: response.data.name || "",
          surname: response.data.surname || "",
          title: response.data.title || "",
          description: response.data.description || "",
          email: response.data.email || "",
          twitter: response.data.twitter || "",
          instagram: response.data.instagram || "",
          website: response.data.website || "",
          wechat: response.data.wechat || "",
          phoneNumber1: response.data.phoneNumber1 || "",
          phoneNumber2: response.data.phoneNumber2 || "",
          whatsapp: response.data.whatsapp || "",
          linkedin: response.data.linkedin || "",
          youtube: response.data.youtube || "",
          telegram: response.data.telegram || "",
          facebook: response.data.facebook || "",
          location: response.data.location || "",
          discord: response.data.discord || "",
          whatsappBusiness: response.data.whatsappBusiness || "",
          cicekSepeti: response.data.cicekSepeti || "",
          sahibinden: response.data.sahibinden || "",
          trendyol: response.data.trendyol || "",
          hepsiburada: response.data.hepsiburada || "",
          n11: response.data.n11 || "",
          amazon: response.data.amazon || "",
          getir: response.data.getir || "",
          epttAvm: response.data.epttAvm || "",
          firm: response.data.firm || "",
        });

        const imagesList = await axios.get(
          `https://ecoqrcode.com/businessCard/getPhotosByLink?linkId=${response.data.linkId}`
        );
        setImagesInformation(imagesList.data);

        const linkList = await axios.get(
          `https://ecoqrcode.com/linkInformation/getLinkInformationByDigitalCardId?digitalCardId=${response.data.id}`
        );
        setLinkInformation(linkList.data);

        const banka = await axios.get(
          `https://ecoqrcode.com/bankInformation/getBankInformationDigitalCardId?digitalCardId=${response.data.id}`
        );
        setBankaInformation(banka.data);

        const invoice = await axios.get(
          `https://ecoqrcode.com/invoiceInformation/getInvoiceInformationByDigitalCardId?digitalCardId=${response.data.id}`
        );
        setInvoiceInformation(invoice.data);

        const warrant = await axios.get(
          `https://ecoqrcode.com/warrantOfAttorney/getWarrantOfAttorneyByDigitalCardId?digitalCardId=${response.data.id}`
        );
        setWarrantInformation(warrant.data);

        const catalog = await axios.get(
          `https://ecoqrcode.com/businessCard/getCatalogByLink?linkId=${response.data.linkId}`
        );
        setCatalogInformation(catalog.data);
        console.log("catalog", catalog);
        const updatedBankaInformationCreate = bankaInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );

        setBankaInformationCreate(updatedBankaInformationCreate);

        const updatedInvoiceInformationCreate = invoiceInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );

        setInvoiceInformationCreate(updatedInvoiceInformationCreate);

        const updatedWarrantInformationCreate = warrantInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );
        setWarrantInformationCreate(updatedWarrantInformationCreate);
        const updatedLinkInformationCreate = linkInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );
        setLinkInformationCreate(updatedLinkInformationCreate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [bankaInformationCreate, setBankaInformationCreate] = useState([
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
  ]);

  const [linkInformationCreate, setLinkInformationCreate] = useState([
    {
      title: "",
      link: "",
      digitalCardId: 0,
    },
    {
      title: "",
      link: "",
      digitalCardId: 0,
    },
    {
      title: "",
      link: "",
      digitalCardId: 0,
    },
    {
      title: "",
      link: "",
      digitalCardId: 0,
    },
  ]);
  const [invoiceInformationCreate, setInvoiceInformationCreate] = useState([
    {
      title: "",
      address: "",
      taxNumber: "",
      taxOffice: "",
      digitalCardId: 0,
    },
  ]);

  const [warrantInformationCreate, setWarrantInformationCreate] = useState([
    {
      title: "",
      address: "",
      citizenId: "",
      registerNo: "",
      barAssociation: "",
      digitalCardId: 0,
    },
  ]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeBanka = (event, index) => {
    const { name, value } = event.target;
    setBankaInformation((prevBankaInformation) => {
      const updatedBankaInformation = [...prevBankaInformation]; // Önceki banka bilgilerini kopyala
      updatedBankaInformation[index] = {
        ...updatedBankaInformation[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedBankaInformation; // Güncellenmiş durumu döndür
    });
  };

  const handleImage1Change = (e) => {
    setProfilPhoto(e.target.files[0]);
  };

  const handleImage2Change = (e) => {
    setBannerPhoto(e.target.files[0]);
  };

  const getImageProfil = (name) => {
    const image = imagesInformation.find((img) => img.name === name);
    if (image) {
      console.log("getImageProfil", image); // ID'yi kontrol et
      return { url: image.url, id: image.id };
    }
    return { url: "", id: null }; // Bulunamazsa varsayılan değer döndür
  };

  const getImageBanner = (name) => {
    const image = imagesInformation.find((img) => img.name === name);
    if (image) {
      console.log("getImageBanner", image); // ID'yi kontrol et
      return { url: image.url, id: image.id };
    }
    return { url: "", id: null }; // Bulunamazsa varsayılan değer döndür
  };

  console.log("profil", profilPhoto);
  console.log("banner", bannerPhoto);

  const [showInputInstagram, setShowInputInstagram] = useState(false);
  const showInstagram = () => {
    setShowInputInstagram(!showInputInstagram);
  };
  const [showInputX, setShowInputX] = useState(false);
  const showX = () => {
    setShowInputX(!showInputX);
  };
  const [showInputTelegram, setShowInputTelegram] = useState(false);
  const showTelegram = () => {
    setShowInputTelegram(!showInputTelegram);
  };
  const [showInputFacebook, setShowInputFacebook] = useState(false);
  const showFacebook = () => {
    setShowInputFacebook(!showInputFacebook);
  };
  const [showInputWhatshapp, setShowInputWhatshapp] = useState(false);
  const showWhatshapp = () => {
    setShowInputWhatshapp(!showInputWhatshapp);
  };
  const [showInputLinkedin, setShowInputLinkedin] = useState(false);
  const showLinkedin = () => {
    setShowInputLinkedin(!showInputLinkedin);
  };

  const [showInputYoutube, setShowInputYoutube] = useState(false);
  const showYoutube = () => {
    setShowInputYoutube(!showInputYoutube);
  };

  const [showInputDiscord, setShowInputDiscord] = useState(false);
  const showDiscord = () => {
    setShowInputDiscord(!showInputDiscord);
  };

  const [showInputWeChat, setShowInputWeChat] = useState(false);
  const showWeChat = () => {
    setShowInputWeChat(!showInputWeChat);
  };

  const [showInputWhatsappBusiness, setShowWhatsappBusiness] = useState(false);
  const showWhatsappBusiness = () => {
    setShowWhatsappBusiness(!showInputWhatsappBusiness);
  };
  const [showInputCiceksepeti, setShowInputCiceksepeti] = useState(false);
  const showCiceksepeti = () => {
    setShowInputCiceksepeti(!showInputCiceksepeti);
  };

  const [showInputSahibinden, setShowInputSahibinden] = useState(false);
  const showSahibinden = () => {
    setShowInputSahibinden(!showInputSahibinden);
  };

  const [showInputTrendyol, setShowInputTrendyol] = useState(false);
  const showTrendyol = () => {
    setShowInputTrendyol(!showInputTrendyol);
  };

  const [showInputHepsiburada, setShowInputHepsiburada] = useState(false);
  const showHepsiburada = () => {
    setShowInputHepsiburada(!showInputHepsiburada);
  };
  const [showInputAmazon, setShowInputAmazon] = useState(false);
  const showAmazon = () => {
    setShowInputAmazon(!showInputAmazon);
  };
  const [showInputN11, setShowInputN11] = useState(false);
  const showN11 = () => {
    setShowInputN11(!showInputN11);
  };
  const [showInputGetir, setShowInputGetir] = useState(false);
  const showGetir = () => {
    setShowInputGetir(!showInputGetir);
  };
  const [showInputePttAvm, setShowInputePttAvm] = useState(false);
  const showePttAvm = () => {
    setShowInputePttAvm(!showInputePttAvm);
  };
  const [showInputGallery, setShowInputGallery] = useState(false);
  const handleGallery = () => {
    setShowInputGallery(!showInputGallery);
  };

  const [showInputGallery2, setShowInputGallery2] = useState(false);
  const handleGallery2 = () => {
    setShowInputGallery2(!showInputGallery2);
  };
  const [showInputGallery3, setShowInputGallery3] = useState(false);
  const handleGallery3 = () => {
    setShowInputGallery3(!showInputGallery3);
  };
  const [showInputGallery4, setShowInputGallery4] = useState(false);
  const handleGallery4 = () => {
    setShowInputGallery4(!showInputGallery4);
  };
  const [showInputGallery5, setShowInputGallery5] = useState(false);
  const handleGallery5 = () => {
    setShowInputGallery5(!showInputGallery5);
  };

  const [showInputPdf, setShowInputPdf] = useState(false);
  const handlePdf = () => {
    setShowInputPdf(!showInputPdf);
  };

  const [showInputPdf2, setShowInputPdf2] = useState(false);
  const handlePdf2 = () => {
    setShowInputPdf2(!showInputPdf2);
  };
  const [showInputPdf3, setShowInputPdf3] = useState(false);
  const handlePdf3 = () => {
    setShowInputPdf3(!showInputPdf3);
  };
  const [showInputPdf4, setShowInputPdf4] = useState(false);
  const handlePdf4 = () => {
    setShowInputPdf4(!showInputPdf4);
  };
  const [error9, setError9] = useState("");
  const handleCatalog = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 10) {
        setError9("Dosya boyutu 10 MB'den büyük olamaz.");
        setCatalog(null);
      } else {
        setError9("");
        setCatalog(file); // Resim önizlemesi için
      }
    }
  };
  const [error8, setError8] = useState("");
  const handleCatalog2 = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 10) {
        setError8("Dosya boyutu 10 MB'den büyük olamaz.");
        setCatalog2(null);
      } else {
        setError8("");
        setCatalog2(file); // Resim önizlemesi için
      }
    }
  };
  const [error7, setError7] = useState("");
  const handleCatalog3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 10) {
        setError7("Dosya boyutu 10 MB'den büyük olamaz.");
        setCatalog3(null);
      } else {
        setError7("");
        setCatalog3(file); // Resim önizlemesi için
      }
    }
  };

  const [error6, setError6] = useState("");
  const handleCatalog4 = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 10) {
        setError6("Dosya boyutu 10 MB'den büyük olamaz.");
        setCatalog4(null);
      } else {
        setError6("");
        setCatalog4(file); // Resim önizlemesi için
      }
    }
  };
  const [error, setError] = useState("");
  const handleImage3Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 20) {
        setError("Dosya boyutu 20 MB'den büyük olamaz.");
        setImage3(null);
      } else {
        setError("");
        setImage3(file); // Resim önizlemesi için
      }
    }
  };
  const [error2, setError2] = useState("");
  const handleImage4Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 20) {
        setError2("Dosya boyutu 20 MB'den büyük olamaz.");
        setImage4(null);
      } else {
        setError2("");
        setImage4(file); // Resim önizlemesi için
      }
    }
  };

  const [error3, setError3] = useState("");
  const handleImage5Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 20) {
        setError3("Dosya boyutu 20 MB'den büyük olamaz.");
        setImage5(null);
      } else {
        setError3("");
        setImage5(file); // Resim önizlemesi için
      }
    }
  };
  const [error4, setError4] = useState("");
  const handleImage6Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 20) {
        setError4("Dosya boyutu 20 MB'den büyük olamaz.");
        setImage6(null);
      } else {
        setError4("");
        setImage6(file); // Resim önizlemesi için
      }
    }
  };
  const [error5, setError5] = useState("");
  const handleImage7Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
      const fileSizeInMB = file.size / (1024 * 1024);

      if (fileSizeInMB > 20) {
        setError5("Dosya boyutu 20 MB'den büyük olamaz.");
        setImage7(null);
      } else {
        setError5("");
        setImage7(file); // Resim önizlemesi için
      }
    }
  };
  const handleChangeTheme1 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };
  const handleChangeTheme2 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };
  const sendGalleryToServer = async (image, linkId, name) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("linkId", values.linkId);
      formData.append("name", name);
      const jsonData = {
        file: image,
        linkId: values.linkId,
        name: name,
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(
        "https://ecoqrcode.com/businessCard/uploadGallery",
        formData,
        { headers }
      );
      console.log("Yükleme başarılı:", response.data);
      console.log("formdata", formData);
      setImage3("");
      setImage4("");
      setImage5("");
      setImage6("");
      setImage7("");
    } catch (error) {
      console.error(
        "Yükleme hatası:",
        error.response ? error.response.data : error.message
      );
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Resmin boyutu çok yüksek.",
      });
    }
  };
  const sendDataToServer = async () => {
    if (profilPhoto) {
      sendGalleryToServer(profilPhoto, values.linkId, "profilphoto");
    }
    if (bannerPhoto) {
      sendGalleryToServer(bannerPhoto, values.linkId, "banner");
    }
    if (image3) {
      sendGalleryToServer(image3, values.linkId, "gallery1", true);
    }
    if (image4) {
      sendGalleryToServer(image4, values.linkId, "gallery2", true);
    }
    if (image5) {
      sendGalleryToServer(image5, values.linkId, "gallery3", true);
    }
    if (image6) {
      sendGalleryToServer(image6, values.linkId, "gallery4", true);
    }
    if (image7) {
      sendGalleryToServer(image7, values.linkId, "gallery5", true);
    }
    if (catalog) {
      sendPdfToServer(catalog, values.linkId, catalog.name);
    }
    if (catalog2) {
      sendPdfToServer(catalog2, values.linkId, catalog2.name);
    }
    if (catalog3) {
      sendPdfToServer(catalog3, values.linkId, catalog3.name);
    }
    if (catalog4) {
      sendPdfToServer(catalog4, values.linkId, catalog4.name);
    }
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        "https://ecoqrcode.com/businessCard/updateDigitalCard",
        values,
        { headers }
      );
      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Kartınız başarıyla güncellendi!",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oturum süreniz doldu. Tekrar giriş yapınız.",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/login");
    }
  };
  const deleteBankaInformation = async (iban) => {
    try {
      // Silme işlemi
      const response = await axios.delete(
        `https://ecoqrcode.com/bankInformation/deleteBankInformation?iban=${iban}`
      );

      // Durum güncelleme
      setBankaInformation((prevState) =>
        prevState.filter((bankInfo) => bankInfo.iban !== iban)
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Silindi",
        text: "Banka bilgisi başarıyla silindi.",
        confirmButtonText: "Tamam",
      });

      console.log("Banka bilgisi silindi:", response.data);

      // Silme işleminden sonra banka bilgilerini güncellemek için
      // fetchBankaBilgileri fonksiyonunu yeniden çağırabiliriz.
      // fetchBankaBilgileri();
    } catch (error) {
      console.error("Banka bilgisi silinirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Banka bilgisi silinirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const deleteLinkInformation = async (id) => {
    try {
      // Silme işlemi
      const response = await axios.delete(
        `https://ecoqrcode.com/linkInformation/deleteLinkInformation?id=${id}`
      );

      // Durum güncelleme
      setLinkInformation((prevState) =>
        prevState.filter((linkInfo) => linkInfo.id !== id)
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Silindi",
        text: "Bağlantı başarıyla silindi.",
        confirmButtonText: "Tamam",
      });

      console.log("Bağlantı bilgisi silindi:", response.data);

      // Silme işleminden sonra banka bilgilerini güncellemek için
      // fetchBankaBilgileri fonksiyonunu yeniden çağırabiliriz.
      // fetchBankaBilgileri();
    } catch (error) {
      console.error("Bağlantı silinirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Bağlantı silinirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const deleteInvoiceInformation = async (taxNumber) => {
    try {
      // Silme işlemi
      const response = await axios.delete(
        `https://ecoqrcode.com/invoiceInformation/deleteInvoiceInformation?taxNumber=${taxNumber}`
      );

      // Durum güncelleme
      setInvoiceInformation((prevState) =>
        prevState.filter((invoiceInfo) => invoiceInfo.taxNumber !== taxNumber)
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Silindi",
        text: "Fatura bilgisi başarıyla silindi.",
        confirmButtonText: "Tamam",
      });

      console.log("Fatura bilgisi silindi:", response.data);
    } catch (error) {
      console.error("Fatura bilgisi silinirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Fatura bilgisi silinirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const deleteWarrantInformation = async (citizenId) => {
    try {
      // Silme işlemi
      const response = await axios.delete(
        `https://ecoqrcode.com/warrantOfAttorney/deleteWarrantOfAttorney?citizenId=${citizenId}`
      );

      // Durum güncelleme
      setWarrantInformation((prevState) =>
        prevState.filter((warrantInfo) => warrantInfo.citizenId !== citizenId)
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Silindi",
        text: "Vekalet bilgisi başarıyla silindi.",
        confirmButtonText: "Tamam",
      });

      console.log("Vekalet belgesi silindi:", response.data);
    } catch (error) {
      console.error("Vekalet bilgisi silinirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Vekalet bilgisi silinirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const deleteCatalogInformation = async (id) => {
    try {
      const response = await axios.delete(
        `https://ecoqrcode.com/businessCard/deleteCatalog?id=${id}`
      );
      setCatalogInformation((prevState) =>
        prevState.filter((catalogInfo) => catalogInfo.id !== id)
      );
      console.log("Fatura bilgisi silindi:", response.data);
    } catch (error) {
      console.error("Fatura bilgisi silinirken hata oluştu:", error);
    }
  };
  const handleChangeBank = (event, index) => {
    const { name, value } = event.target;
    setBankaInformationCreate((prevBankaInformationCreate) => {
      const updatedBankaInformationCreate = [...prevBankaInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedBankaInformationCreate[index] = {
        ...updatedBankaInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedBankaInformationCreate; // Güncellenmiş durumu döndür
    });
  };

  const handleChangeLink = (event, index) => {
    const { name, value } = event.target;
    const updatedLinkInformation = [...linkInformationCreate];
    updatedLinkInformation[index] = {
      ...updatedLinkInformation[index],
      [name]: value,
    };
    setLinkInformationCreate(updatedLinkInformation);
  };
  console.log("link state", linkInformationCreate);

  const handleChangeInvoice = (event, index) => {
    const { name, value } = event.target;
    setInvoiceInformationCreate((prevInvoiceInformationCreate) => {
      const updatedInvoiceInformationCreate = [...prevInvoiceInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedInvoiceInformationCreate[index] = {
        ...updatedInvoiceInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedInvoiceInformationCreate; // Güncellenmiş durumu döndür
    });
  };

  const handleChangeWarrant = (event, index) => {
    const { name, value } = event.target;
    setWarrantInformationCreate((prevWarrantInformationCreate) => {
      const updatedWarrantInformationCreate = [...prevWarrantInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedWarrantInformationCreate[index] = {
        ...updatedWarrantInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedWarrantInformationCreate; // Güncellenmiş durumu döndür
    });
  };
  const sendBankaServer = async () => {
    try {
      // Boş olanları filtrele
      const filteredData = bankaInformationCreate.filter(
        (bankInfo) =>
          bankInfo.iban.trim() !== "" &&
          bankInfo.accountName.trim() !== "" &&
          bankInfo.bankName.trim() !== ""
      );
      console.log("filteredData", filteredData);

      // Filtrelenmiş verileri gönder
      if (filteredData.length > 0) {
        await axios.post(
          "https://ecoqrcode.com/bankInformation/createBankInformation",
          filteredData
        );

        // Başarı bildirimini göster
        Swal.fire({
          icon: "success",
          title: "Başarıyla Gönderildi",
          text: "Banka bilgileri başarıyla gönderildi.",
          confirmButtonText: "Tamam",
        });

        // Verileri sıfırla
        setBankaInformationCreate([
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
        ]);
      } else {
        Swal.fire({
          icon: "info",
          title: "Bilgi",
          text: "Gönderilecek banka bilgisi bulunamadı.",
          confirmButtonText: "Tamam",
        });
      }
    } catch (error) {
      console.error("Banka bilgisi gönderilirken hata oluştu:", error);
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Banka bilgisi gönderilirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const sendLinkServer = async () => {
    try {
      // Boş olanları filtrele
      const filteredData = linkInformationCreate.filter(
        (linkInfo) =>
          linkInfo.title.trim() !== "" && linkInfo.link.trim() !== ""
      );
      console.log("filteredData", filteredData);

      // Filtrelenmiş verileri gönder
      if (filteredData.length > 0) {
        await axios.post(
          "https://ecoqrcode.com/linkInformation/createLinkInformation",
          filteredData
        );

        // Başarı bildirimini göster
        Swal.fire({
          icon: "success",
          title: "Başarıyla Gönderildi",
          text: "Bağlantı başarıyla gönderildi.",
          confirmButtonText: "Tamam",
        });

        // Verileri sıfırla
        setLinkInformationCreate([
          {
            title: "",
            link: "",
            digitalCardId: 0,
          },
          {
            title: "",
            link: "",
            digitalCardId: 0,
          },
          {
            title: "",
            link: "",
            digitalCardId: 0,
          },
          {
            title: "",
            link: "",
            digitalCardId: 0,
          },
        ]);
      } else {
        Swal.fire({
          icon: "info",
          title: "Bilgi",
          text: "Gönderilecek bağlantı bulunamadı.",
          confirmButtonText: "Tamam",
        });
      }
    } catch (error) {
      console.error("Bağlantı gönderilirken hata oluştu:", error);
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Bağlantı gönderilirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };

  const sendInvoiceServer = async () => {
    try {
      // Fatura bilgilerini gönderme işlemi
      await axios.post(
        "https://ecoqrcode.com/invoiceInformation/createInvoiceInformation",
        invoiceInformationCreate
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Başarı",
        text: "Fatura bilgileri başarıyla gönderildi.",
        confirmButtonText: "Tamam",
      });

      // Gönderim başarılı olduğunda verileri sıfırlama
      setInvoiceInformationCreate([
        {
          title: "",
          address: "",
          taxNumber: "",
          taxOffice: "",
          digitalCardId: 0,
        },
      ]);
    } catch (error) {
      console.error("Fatura bilgisi gönderilirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Fatura bilgisi gönderilirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };
  const sendWarrantServer = async () => {
    try {
      // Vekalet bilgilerini gönderme işlemi
      await axios.post(
        "https://ecoqrcode.com/warrantOfAttorney/createWarrantOfAttorney",
        warrantInformationCreate
      );

      // Başarı bildirimini göster
      Swal.fire({
        icon: "success",
        title: "Başarı",
        text: "Vekalet bilgileri başarıyla gönderildi.",
        confirmButtonText: "Tamam",
      });

      // Gönderim başarılı olduğunda verileri sıfırlama
      setWarrantInformationCreate([
        {
          title: "",
          address: "",
          citizenId: "",
          registerNo: "",
          barAssociation: "",
          digitalCardId: 0,
        },
      ]);
    } catch (error) {
      console.error("Vekalet bilgisi gönderilirken hata oluştu:", error);

      // Hata bildirimini göster
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Vekalet bilgisi gönderilirken bir hata oluştu.",
        confirmButtonText: "Tamam",
      });
    }
  };
  const sendPdfToServer = async (image, linkId, name) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("linkId", values.linkId);
      formData.append("name", name);

      const jsonData = {
        file: image,
        linkId: values.linkId,
        name: name,
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "https://ecoqrcode.com/businessCard/uploadPdf",
        formData,
        { headers }
      );
      console.log("Yükleme başarılı:", response.data);
      setCatalog("");
      setCatalog2("");
      setCatalog3("");
      setCatalog4("");
    } catch (error) {
      console.error(
        "Yükleme hatası:",
        error.response ? error.response.data : error.message
      );
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "PDF dokümanı yüklenemedi.",
      });
    }
  };

  const galleryImages = imagesInformation.filter((img) =>
    img.name.startsWith("gallery")
  );
  const deleteGalleryImage = async (id) => {
    const url = `https://ecoqrcode.com/businessCard/deleteImages?id=${id}`;
    console.log("Request URL:", url); // URL'yi kontrol edin
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log("headers", headers);
      await axios.delete(url, { headers });
      console.log("Image deleted successfully");

      // Resim başarıyla silindikten sonra galeri listesini güncelle
      setImagesInformation((prevImages) =>
        prevImages.filter((img) => img.id !== id)
      );
    } catch (error) {
      console.error(
        "Error deleting image:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const deleteProfilPhoto = async () => {
    const { id } = getImageProfil("profilphoto");
    if (id) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://ecoqrcode.com/businessCard/deleteImages?id=${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Resim silindikten sonra state'i güncelle
        setImagesInformation(imagesInformation.filter((img) => img.id !== id));
        setImageAdded(null);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };
  const isInputDisabled = !!getImageProfil("profilphoto").url;
  const deleteBannerPhoto = async () => {
    const { id } = getImageBanner("banner");
    if (id) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://ecoqrcode.com/businessCard/deleteImages?id=${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Resim silindikten sonra state'i güncelle
        setImagesInformation(imagesInformation.filter((img) => img.id !== id));
        setImageAdded(null);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };
  const isInputDisabled2 = !!getImageProfil("banner").url;
  console.log("image3", image3);
  return (
    <div className="font-montserrat">
      {values.linkId !== "" && (
        <div className="p-7">
          <header>
            <h3 className="text-lg font-medium text-zinc-700 mb-2">İÇERİK</h3>
          </header>
          <div className="flex flex-col w-full mb-3">
            <div className="flex items-center">
              <div
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-200 flex items-center justify-center"
              >
                ecoqrcode.com/
              </div>
              <input
                name="linkId"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-50 flex items-center justify-center w-full"
                placeholder="Sayfanızın URL'si"
                value={values.linkId}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div className="flex flex-col">
              <input
                name="name"
                className="input"
                placeholder="Ad"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="surname"
                className="input"
                placeholder="Soyad"
                value={values.surname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="title"
                className="input"
                placeholder="Şirketiniz"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="description"
                className="input"
                placeholder="Unvanınız"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="firm"
                className="input"
                placeholder="Açıklama"
                value={values.firm}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="phoneNumber1"
                className="input"
                placeholder="05555555555"
                value={values.phoneNumber1}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="email"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-50 flex items-center justify-center"
                placeholder="E-posta"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <input
                name="website"
                className="input"
                placeholder="İnternet sitesi"
                value={values.website}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="location"
                className="input"
                placeholder="https://www.google.com/maps/place/konum_adı/@enlem, boylam, zoom_level"
                value={values.location}
                onChange={handleChange}
              />
            </div>
            {/* {values.bankInformationList.map((bankInfo, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].iban`}
                    className="input"
                    placeholder="IBAN"
                    value={bankInfo.iban}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].bankName`}
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].accountName`}
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName}
                    onChange={handleChange}
                  />
                </div>
              </React.Fragment>
            ))} */}

            <div className="flex flex-col">
              <button
                type="button"
                onClick={showInstagram}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium bg-gradient-to-l from-[#d61313] to-[#e2a127] text-transparent bg-clip-text">
                  Instagram
                </span>

                <img src={instagram} className="w-6 text-red-400" />
              </button>
              {showInputInstagram && (
                <>
                  <input
                    name="instagram"
                    className="input mt-3"
                    placeholder="https://www.instagram.com/kullanici_adi/"
                    value={values.instagram}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showX}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium">Twitter</span>

                <img src={twitter} className="w-6 text-red-400" />
              </button>
              {showInputX && (
                <>
                  <input
                    name="twitter"
                    className="input mt-3"
                    placeholder="https://x.com/kullanici_adi"
                    value={values.twitter}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showTelegram}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-sky-500">Telegram</span>

                <img src={telegram} className="w-6" />
              </button>
              {showInputTelegram && (
                <>
                  <input
                    name="telegram"
                    className="input mt-3"
                    placeholder="https://t.me/kullanici_adi"
                    value={values.telegram}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showFacebook}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-sky-600">Facebook</span>

                <img src={facebook} className="w-6" />
              </button>
              {showInputFacebook && (
                <>
                  <input
                    name="facebook"
                    className="input mt-3"
                    placeholder="https://www.facebook.com/kullanici_adi"
                    value={values.facebook}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showWhatshapp}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-green-600">Whatshapp</span>

                <img src={whatsapp} className="w-6" />
              </button>
              {showInputWhatshapp && (
                <>
                  <input
                    name="whatsapp"
                    className="input mt-3"
                    placeholder="05555555555"
                    value={values.whatsapp}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showLinkedin}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-sky-600">Linkedin</span>

                <img src={linkedin} className="w-6" />
              </button>
              {showInputLinkedin && (
                <>
                  <input
                    name="linkedin"
                    className="input mt-3"
                    placeholder="https://www.linkedin.com/in/kullanici_adi"
                    value={values.linkedin}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col">
              <button
                type="button"
                onClick={showYoutube}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-red-600">Youtube</span>

                <img src={youtube} className="w-6" />
              </button>
              {showInputYoutube && (
                <>
                  <input
                    name="youtube"
                    className="input mt-3"
                    placeholder="https://www.youtube.com/channel/UCxxxxxxxxxxxxxx"
                    value={values.youtube}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col">
              <button
                type="button"
                onClick={showDiscord}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-purple-600">Discord</span>

                <img src={discord} className="w-6" />
              </button>
              {showInputDiscord && (
                <>
                  <input
                    name="discord"
                    className="input mt-3"
                    placeholder="https://discord.gg/sunucu_kodu"
                    value={values.discord}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col ">
              <button
                type="button"
                onClick={showWhatsappBusiness}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-green-600">
                  Whatshapp Business
                </span>

                <img src={whatsapp} className="w-6" />
              </button>
              {showInputWhatsappBusiness && (
                <>
                  <input
                    name="whatsappBusiness"
                    className="input mt-3"
                    placeholder="05555555555"
                    value={values.whatsappBusiness}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col pb-10">
              <button
                type="button"
                onClick={showWeChat}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-emerald-600">WeChat</span>

                <img src={wechat} className="w-6" />
              </button>
              {showInputWeChat && (
                <>
                  <input
                    name="wechat"
                    className="input mt-3"
                    placeholder="WeChat"
                    value={values.wechat}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="opacity-0">s</div>

            <hr className="my-7 border-1 border-emerald-700 " />
            <hr className="my-7 border-1 border-emerald-700 " />

            <h3 className="font-medium mb-5">PAZAR YERLERİ</h3>
            <div></div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showSahibinden}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-[9px] rounded "
              >
                <span className="font-medium text-yellow-300">Sahibinden</span>
              </button>
              {showInputSahibinden && (
                <>
                  <input
                    name="sahibinden"
                    className="input mt-3"
                    placeholder="https://www.sahibinden.com/mağaza/mağaza_adı"
                    value={values.sahibinden}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showTrendyol}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-orange-500">Trendyol</span>
              </button>
              {showInputTrendyol && (
                <>
                  <input
                    name="trendyol"
                    className="input mt-3"
                    placeholder="https://www.trendyol.com/mağaza/mağaza-adi"
                    value={values.trendyol}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2">
              <button
                type="button"
                onClick={showHepsiburada}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-orange-500">Hepsiburada</span>
              </button>
              {showInputHepsiburada && (
                <>
                  <input
                    name="hepsiburada"
                    className="input mt-3"
                    placeholder="https://www.hepsiburada.com/mağaza/mağaza-adi"
                    value={values.hepsiburada}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showCiceksepeti}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-blue-700">Çiçek Sepeti</span>

                <img src={ciceksepeti} className="w-6" />
              </button>
              {showInputCiceksepeti && (
                <>
                  <input
                    name="cicekSepeti"
                    className="input mt-3"
                    placeholder="https://www.ciceksepeti.com/magaza/magaza-adi"
                    value={values.cicekSepeti}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showAmazon}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-[#ff9900]">Amazon</span>
              </button>
              {showInputAmazon && (
                <>
                  <input
                    name="amazon"
                    className="input mt-3"
                    placeholder="https://www.amazon.com/shops/[mağaza-adi]"
                    value={values.amazon}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showN11}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-[#0033A0]">N11</span>
              </button>
              {showInputN11 && (
                <>
                  <input
                    name="n11"
                    className="input mt-3"
                    placeholder="https://www.n11.com/mağaza/[mağaza-adi]"
                    value={values.n11}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showGetir}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-purple-500">Getir</span>
              </button>
              {showInputGetir && (
                <>
                  <input
                    name="getir"
                    className="input mt-3"
                    placeholder="https://getir.com/[mağaza-adi]"
                    value={values.getir}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showePttAvm}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-[#0033A0]">PttAVM</span>
              </button>
              {showInputePttAvm && (
                <>
                  <input
                    name="epttAvm"
                    className="input mt-3"
                    placeholder="https://www.pttavm.com/mağaza/[mağaza-adi]"
                    value={values.epttAvm}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          </div>
          <hr className="border-1 border-emerald-700  my-10" />
          {/* BANKA */}
          <h3 className="font-medium pl-3">BAĞLANTILARI GÜNCELLE</h3>
          {/* bankInformation */}
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 pb-5">
            {linkInformation.map((linkInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Bağlantı - {`${index + 1}`}</p>
                <div className="flex flex-col space-y-3">
                  <input
                    name="link"
                    className="input"
                    placeholder="Bağlantı"
                    disabled
                    value={linkInfo.title || ""}
                  />
                  <input
                    name="link"
                    className="input"
                    placeholder="Bağlantı"
                    disabled
                    value={linkInfo.link || ""}
                  />
                </div>

                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() => deleteLinkInformation(linkInfo.id)}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>

          {/* bankInformation */}

          {/* bankaCreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col pt-5 ">
            {linkInformationCreate.map((linkInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Bağlantı - {`${index + 1}`}</p>
                <div className="flex flex-col space-y-3">
                  <input
                    name="title"
                    className="input"
                    placeholder="Bağlantı başlığı"
                    value={linkInfo.title || ""}
                    onChange={(event) => handleChangeLink(event, index)}
                  />
                  <input
                    name="link"
                    className="input"
                    placeholder="Bağlantı"
                    value={linkInfo.link || ""}
                    onChange={(event) => handleChangeLink(event, index)}
                  />
                </div>
              </div>
            ))}
            <div className="text-end w-full pb-10">
              <button
                onClick={sendLinkServer}
                className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
              >
                BAĞLANTILARI EKLE
              </button>
            </div>
          </div>
          {/* LİNK */}
          <hr className="border-1 border-emerald-700  my-10" />
          <h3 className="font-medium pl-3">BANKA BİLGİLERİNİ GÜNCELLE</h3>
          {/* bankInformation */}
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 pb-5">
            {bankaInformation.map((bankInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Banka bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    disabled
                    value={bankInfo.iban || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="bankName"
                    disabled
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() => deleteBankaInformation(bankInfo.iban)}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>

          {/* bankInformation */}

          {/* bankaCreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col pt-5 ">
            {bankaInformationCreate.map((bankInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Banka bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    value={bankInfo.iban || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="bankName"
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
              </div>
            ))}
            <div className="text-end w-full pb-10">
              <button
                onClick={sendBankaServer}
                className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
              >
                BANKA BİLGİLERİNİ EKLE
              </button>
            </div>
          </div>

          {/* <div className="flex flex-wrap  pt-10 ">
            {bankaInformationCreate.map((bankaInfo, index) => (
              <div className="flex-col flex-wrap   basis-1/2 pb-10" key={index}>
                <div className="flex flex-col ">
                  {" "}
                  <input
                    type="text"
                    name="bankName"
                    className="input"
                    placeholder="Banka Adı"
                    value={bankaInfo.bankName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col ">
                  {" "}
                  <input
                    type="text"
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankaInfo.accountName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    value={bankaInfo.iban || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
              </div>
            ))}
          </div> */}
          {/* bankaCreate */}
          <hr className="border-1 border-emerald-700  pb-10" />
          <h3 className="font-medium pl-3">FATURA BİLGİLERİNİ GÜNCELLE</h3>

          {/* invoicedelete */}
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10">
            {invoiceInformation.map((invoiceInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Fatura bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    disabled
                    value={invoiceInfo.title || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    disabled
                    className="input"
                    placeholder="Adres"
                    value={invoiceInfo.address || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="taxOffice"
                    className="input"
                    placeholder="Vergi Dairesi"
                    value={invoiceInfo.taxOffice || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="taxNumber"
                    className="input"
                    placeholder="Vergi Numarası"
                    value={invoiceInfo.taxNumber || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() =>
                    deleteInvoiceInformation(invoiceInfo.taxNumber)
                  }
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
          {/* invoicedelete */}

          {/* invoicecreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col ">
            {invoiceInformationCreate.map((invoiceInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Fatura bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    value={invoiceInfo.title || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    className="input"
                    placeholder="Adres"
                    value={invoiceInfo.address || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="taxNumber"
                    className="input"
                    placeholder="Vergi Numarası"
                    value={invoiceInfo.taxNumber || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="taxOffice"
                    className="input"
                    placeholder="Vergi Dairesi"
                    value={invoiceInfo.taxOffice || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <button
                  onClick={sendInvoiceServer}
                  className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
                >
                  Ekle
                </button>
              </div>
            ))}
          </div>
          {/* invoicecreate */}
          <hr className="border-1 border-emerald-700  pb-10" />

          {/* warrantdelete */}
          <h3 className="font-medium pl-3">VEKALET BİLGİLERİNİ GÜNCELLE</h3>
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 ">
            {warrantInformation.map((warrantInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Vekalet bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    disabled
                    value={warrantInfo.title || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    disabled
                    className="input"
                    placeholder="Adres"
                    value={warrantInfo.address || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="citizenId"
                    className="input"
                    placeholder="Kimlik Numarası"
                    value={warrantInfo.citizenId || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="registerNo"
                    className="input"
                    placeholder="Registir No"
                    value={warrantInfo.registerNo || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="barAssociation"
                    className="input"
                    placeholder="Baro Numarası"
                    value={warrantInfo.barAssociation || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() =>
                    deleteWarrantInformation(warrantInfo.citizenId)
                  }
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
          {/* warrantdelete */}

          {/* warrantcreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col ">
            {warrantInformationCreate.map((warrantInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Vekalet bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    value={warrantInfo.title || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    className="input"
                    placeholder="Adres"
                    value={warrantInfo.address || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="citizenId"
                    className="input"
                    placeholder="Kimlik numarası"
                    value={warrantInfo.citizenId || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="registerNo"
                    className="input"
                    placeholder="Kayıt numarası"
                    value={warrantInfo.registerNo || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="barAssociation"
                    className="input"
                    placeholder="Baro numarası"
                    value={warrantInfo.barAssociation || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <button
                  onClick={sendWarrantServer}
                  className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
                >
                  Ekle
                </button>
              </div>
            ))}
          </div>
          {/* warrantcreate */}

          {/* KATALOG DELETE */}
          <h3 className="font-medium pl-3">KATALOG BİLGİLERİNİ GÜNCELLE</h3>
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 ">
            {catalogInformation.map((catalog, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Katalog bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    disabled
                    value={catalog.name || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>

                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() => deleteCatalogInformation(catalog.id)}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
          {/* KATALOG DELETE */}

          {/* KATALOG CREATE */}

          <div className="space-y-5">
            <h3 className="font-medium pl-3">KATALOG BİLGİLERİNİ GÜNCELLE</h3>

            <button
              type="button"
              onClick={handlePdf}
              className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2 ml-3"
            >
              PDF EKLE +
            </button>

            <div className="grid md:grid-cols-2 gap-2.5 pl-3">
              <div>
                {showInputPdf && (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <label htmlFor="catalog" className="text-sm">
                        Katalog / PDF ekle
                      </label>
                      <input
                        id="catalog"
                        name="catalog"
                        type="file"
                        accept="application/pdf"
                        onChange={handleCatalog}
                        className="input pt-1.5 mt-1"
                      />
                      {error9 && <p style={{ color: "red" }}>{error9}</p>}
                      {catalog && <p>{catalog.name}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={handlePdf2}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      PDF EKLE +
                    </button>
                  </>
                )}
              </div>
              <div>
                {" "}
                {showInputPdf2 && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="catalog2" className="text-sm">
                        Katalog / PDF ekle
                      </label>
                      <input
                        id="catalog2"
                        name="catalog2"
                        type="file"
                        accept="application/pdf"
                        onChange={handleCatalog2}
                        className="input pt-1.5 mt-1"
                      />
                      {error8 && <p style={{ color: "red" }}>{error8}</p>}
                      {catalog2 && <p>{catalog2.name}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={handlePdf3}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      PDF EKLE +
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2.5 pl-3">
              <div>
                {showInputPdf3 && (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <label htmlFor="catalog3" className="text-sm">
                        Katalog / PDF ekle
                      </label>
                      <input
                        id="catalog3"
                        name="catalog3"
                        type="file"
                        accept="application/pdf"
                        onChange={handleCatalog3}
                        className="input pt-1.5 mt-1"
                      />
                      {error7 && <p style={{ color: "red" }}>{error7}</p>}
                      {catalog3 && <p>{catalog3.name}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={handlePdf4}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      PDF EKLE +
                    </button>
                  </>
                )}
              </div>
              <div>
                {showInputPdf4 && (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <label htmlFor="catalog" className="text-sm">
                        Katalog / PDF ekle
                      </label>
                      <input
                        id="catalog4"
                        name="catalog4"
                        type="file"
                        accept="application/pdf"
                        onChange={handleCatalog4}
                        className="input pt-1.5 mt-1"
                      />
                      {error6 && <p style={{ color: "red" }}>{error6}</p>}
                      {catalog4 && <p>{catalog4.name}</p>}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* KATALOG CREATE */}

          <h3 className="text-lg font-medium text-zinc-700 mt-20 mb-10">
            FOTOĞRAFLAR
          </h3>
          <div className="grid md:grid-cols-2 gap-2.5 ">
            <div className="flex flex-col">
              <label htmlFor="photo1" className="text-sm">
                Profil Fotoğrafı
              </label>
              <input
                id="photo1"
                name="photo1"
                type="file"
                accept="image/*"
                onChange={handleImage1Change}
                className="input pt-1.5  mt-1"
                disabled={isInputDisabled}
              />
              {profilPhoto && (
                <img
                  src={URL.createObjectURL(profilPhoto)}
                  className="h-64 w-96 mt-2"
                  alt="Profil Fotoğrafı"
                />
              )}
              {!profilPhoto && getImageProfil("profilphoto") && (
                <>
                  <img
                    src={getImageProfil("profilphoto").url}
                    className="h-64 w-96 mt-2"
                    alt="Profil Fotoğrafı"
                  />
                  <button
                    onClick={deleteProfilPhoto}
                    className="text-start mt-3"
                  >
                    <span className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg">
                      Sil
                    </span>
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo2" className="text-sm">
                Banner Fotoğrafı
              </label>
              <input
                id="photo2"
                name="photo2"
                type="file"
                accept="image/*"
                onChange={handleImage2Change}
                className="input pt-1.5 mt-1"
                disabled={isInputDisabled2}
              />
              {bannerPhoto && (
                <img
                  src={URL.createObjectURL(bannerPhoto)}
                  alt="Banner Fotoğrafı"
                  className="h-64 w-96 mt-2"
                />
              )}
              {!bannerPhoto && getImageBanner("banner") && (
                <>
                  <img
                    src={getImageBanner("banner").url}
                    alt="Banner Fotoğrafı"
                    className="h-64 w-96 mt-2"
                  />
                  <button
                    onClick={deleteBannerPhoto}
                    className="text-start mt-3"
                  >
                    <span className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg">
                      Sil
                    </span>
                  </button>
                </>
              )}
            </div>
            {/* <div className="flex flex-col">
              <label htmlFor="photo3" className="text-sm">
                Photo 3
              </label>
              <input
                id="photo3"
                name="photo3"
                type="file"
                accept="image/*"
                onChange={handleImage3Change}
                className="input pt-1.5 mt-1"
              />
              {image3 && (
                <img
                  src={URL.createObjectURL(image3)}
                  alt="Photo 3"
                  className="h-40"
                />
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo4" className="text-sm">
                Photo 4
              </label>
              <input
                id="photo4"
                name="photo4"
                type="file"
                accept="image/*"
                onChange={handleImage4Change}
                className="input pt-1.5 mt-1"
              />
              {image4 && (
                <img
                  src={URL.createObjectURL(image4)}
                  alt="Photo 4"
                  className="h-40"
                />
              )}
            </div> */}
          </div>

          {/* GALERİ */}
          <hr className="border-1 border-emerald-700  mt-10" />
          <h3 className="text-lg font-medium text-zinc-700 mt-20 mb-10">
            GALERİYİ DÜZENLE
          </h3>
          <div className="grid md:grid-cols-2 gap-2.5 ">
            {galleryImages.map((image, index) => (
              <div className="flex flex-col mb-5">
                <img
                  key={index}
                  src={image.url}
                  alt={`Galeri Fotoğrafı ${index + 1}`}
                  className="h-64 w-96 mt-2" // Stil eklemek isterseniz
                />
                <button
                  onClick={() => deleteGalleryImage(image.id)}
                  className="text-start flex-start mt-3"
                >
                  <span className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg">
                    SİL
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-5 mt-10">
            <button className="text-lg font-medium text-zinc-700 mt-3 md:mt-6">
              GALERİYE FOTOĞRAF EKLE
            </button>

            <button
              type="button"
              onClick={handleGallery}
              className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
            >
              RESİM EKLE +
            </button>
            <div className="grid md:grid-cols-2 gap-2.5">
              <div>
                {showInputGallery && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="photo2" className="text-sm">
                        Galeri Fotoğrafı - 1
                      </label>
                      <input
                        id="photo3"
                        name="photo3"
                        type="file"
                        accept="image/*"
                        onChange={handleImage3Change}
                        className="input pt-1.5 mt-1"
                      />
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      {image3 && (
                        <img
                          src={URL.createObjectURL(image3)}
                          alt="Photo 3"
                          className="h-64  w-96 object-cover"
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleGallery2}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      RESİM EKLE +
                    </button>
                  </>
                )}
              </div>
              <div>
                {showInputGallery2 && (
                  <>
                    <div className="flex flex-col">
                      <label htmlFor="photo4" className="text-sm">
                        Galeri Fotoğrafı - 2
                      </label>
                      <input
                        id="photo4"
                        name="photo4"
                        type="file"
                        accept="image/*"
                        onChange={handleImage4Change}
                        className="input pt-1.5 mt-1"
                      />
                      {error2 && <p style={{ color: "red" }}>{error2}</p>}
                      {image4 && (
                        <img
                          src={URL.createObjectURL(image4)}
                          alt="Photo 4"
                          className="h-64  w-96 object-cover"
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleGallery3}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      RESİM EKLE +
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2.5">
              <div>
                {showInputGallery3 && (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <label htmlFor="photo5" className="text-sm">
                        Galeri Fotoğrafı - 3
                      </label>
                      <input
                        id="photo5"
                        name="photo5"
                        type="file"
                        accept="image/*"
                        onChange={handleImage5Change}
                        className="input pt-1.5 mt-1"
                      />
                      {error3 && <p style={{ color: "red" }}>{error3}</p>}
                      {image5 && (
                        <img
                          src={URL.createObjectURL(image5)}
                          alt="Photo 5"
                          className="h-64  w-96 object-cover"
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleGallery4}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      RESİM EKLE +
                    </button>
                  </>
                )}
              </div>
              <div>
                {showInputGallery4 && (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <label htmlFor="photo5" className="text-sm">
                        Galeri Fotoğrafı - 4
                      </label>
                      <input
                        id="photo6"
                        name="photo6"
                        type="file"
                        accept="image/*"
                        onChange={handleImage6Change}
                        className="input pt-1.5 mt-1"
                      />
                      {error4 && <p style={{ color: "red" }}>{error4}</p>}
                      {image6 && (
                        <img
                          src={URL.createObjectURL(image6)}
                          alt="Photo 6"
                          className="h-64  w-96 object-cover"
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={handleGallery5}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      RESİM EKLE +
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2.5">
              {showInputGallery5 && (
                <>
                  {" "}
                  <div className="flex flex-col">
                    <label htmlFor="photo6" className="text-sm">
                      Galeri Fotoğrafı - 5
                    </label>
                    <input
                      id="photo7"
                      name="photo7"
                      type="file"
                      accept="image/*"
                      onChange={handleImage7Change}
                      className="input pt-1.5 mt-1"
                    />
                    {error5 && <p style={{ color: "red" }}>{error5}</p>}
                    {image7 && (
                      <img
                        src={URL.createObjectURL(image7)}
                        alt="Photo 7"
                        className="h-64  w-96 object-cover"
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* GALERİ */}

          <div className="mt-5">
            <header>
              <h3 className="text-lg font-medium text-zinc-700 mb-2">
                TASARIM
              </h3>
            </header>
            <div className="flex gap-4 md:gap-8">
              <div>
                <span className="flex font-medium mb-2">Kurumsal Tasarım</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 justify-center mx-auto  ">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={1}
                      checked={values.themeId === 1}
                      onChange={handleChangeTheme1}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme1}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 1,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <span className="font-medium mb-4">Bireysel Tasarım</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 mt-2 md:mt-0">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={2}
                      checked={values.themeId === 2}
                      onChange={handleChangeTheme2}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme2}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg mt-2", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 2,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 ">
              <div></div>
              <button
                onClick={sendDataToServer}
                type="submit"
                className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
              >
                GÜNCELLE
              </button>
            </div>
          </div>
        </div>
      )}

      {values.linkId === "" && (
        <div
          className="flex items-center justify-center h-screen p-2 md:p-0"
          style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        >
          <div className="bg-green-300 border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative md:w-1/2">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
              Güncelleme yapabilmeniz için önce kartvizit oluşturmanız gerekiyor
            </h1>

            <div className="text-center">
              <span className="text-white text-lg font-medium">
                Kartvizit oluşturmak için
                <Link
                  to="/dashboard/digital-business-card-create"
                  className="underline ml-1"
                >
                  tıklayınız
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardUpdate;
