import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import classNames from "classnames";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import ciceksepeti from "/socialMediaLogo/ciceksepeti.png";
import link from "/socialMediaLogo/link.png";
import discord from "/socialMediaLogo/discord.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import youtube from "/socialMediaLogo/youtube.svg";
import wechat from "/socialMediaLogo/wechat.svg";
import theme1 from "/themes/12.png";
import Swal from "sweetalert2";
import theme2 from "/themes/13.png";
import axios from "axios";
import { stepperValidation } from "./StepperValidation";
import { useNavigate } from "react-router-dom";

function CardCreate() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [catalog, setCatalog] = useState("");
  const [catalog2, setCatalog2] = useState("");
  const [catalog3, setCatalog3] = useState("");
  const [catalog4, setCatalog4] = useState("");
  const [digitalCardId, setDigitalCardId] = useState("");
  const [showBusinessStore, setShowBusinessStore] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const navigate = useNavigate();
  const localStrogeEmail = localStorage.getItem("email");

  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          // step 1
          linkId: "",
          title: "",
          description: "",
          firm: "",
          name: "",
          surname: "",
          phoneNumber1: "",
          phoneNumber2: "",
          instagram: "",
          linkedin: "",
          youtube: "",
          website: "",
          twitter: "",
          facebook: "",
          location: "",
          whatsapp: "",
          wechat: "",
          telegram: "",
          themeId: 0,
          email: localStrogeEmail,
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
          channelId: 2,

          //step2
          bankInformationList: [
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
          ],
          invoiceInformationList: [
            {
              title: "",
              address: "",
              taxNumber: "",
              taxOffice: "",
            },
          ],
          warrantOfAttorneyDtoList: [
            {
              title: "",
              address: "",
              citizenId: "",
              registerNo: "",
              barAssociation: "",
            },
          ],
          createLinkInformation: [
            {
              title: "",
              link: "",
            },
            {
              title: "",
              link: "",
            },
            {
              title: "",
              link: "",
            },
            {
              title: "",
              link: "",
            },
          ],
        }}
        onSubmit={(values, actions) => {}}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = async (e) => {
            setFieldValue("step", values.step + 1);
            if (image1) {
              sendImageToServer(image1, values.linkId, "profilphoto", false);
            }
            if (image2) {
              sendImageToServer(image2, values.linkId, "banner", false);
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
            const requestData = { ...values };
            delete requestData.step;
            delete requestData.bankInformationList;
            delete requestData.invoiceInformationList;
            delete requestData.warrantOfAttorneyDtoList;
            delete requestData.createLinkInformation;

            localStorage.setItem("email", values.email);
            const token = localStorage.getItem("token");

            const headers = {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            };

            try {
              const response = await axios.post(
                "https://ecoqrcode.com/businessCard/createDigiCard",
                requestData,
                { headers: headers }
              );

              setDigitalCardId(response.data.digitalCardId);

              Swal.fire({
                icon: "success",
                title: "Başarılı!",
                text: "Kartınız başarıyla oluşturuldu!",
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Oturum süreniz doldu. Tekrar giriş yapınız.",
              });
              // localStorage.removeItem("token");
              // localStorage.removeItem("email");
              // navigate("/login");
            }
          };

          const [error, setError] = useState("");
          const handleImage1Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage1(null);
              } else {
                setError("");
                setImage1(file); // Resim önizlemesi için
              }
            }
          };
          const [error2, setError2] = useState("");
          const handleImage2Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError2("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage2(null);
              } else {
                setError2("");
                setImage2(file); // Resim önizlemesi için
              }
            }
          };
          const [error3, setError3] = useState("");
          const handleImage3Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError3("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage3(null);
              } else {
                setError3("");
                setImage3(file); // Resim önizlemesi için
              }
            }
          };
          const [error4, setError4] = useState("");
          const handleImage4Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError4("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage4(null);
              } else {
                setError4("");
                setImage4(file); // Resim önizlemesi için
              }
            }
          };
          const [error5, setError5] = useState("");
          const handleImage5Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError5("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage5(null);
              } else {
                setError5("");
                setImage5(file); // Resim önizlemesi için
              }
            }
          };
          const [error6, setError6] = useState("");
          const handleImage6Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError6("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage6(null);
              } else {
                setError6("");
                setImage6(file); // Resim önizlemesi için
              }
            }
          };
          const [error7, setError7] = useState("");
          const handleImage7Change = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 20) {
                setError7("Dosya boyutu 20 MB'den büyük olamaz.");
                setImage7(null);
              } else {
                setError7("");
                setImage7(file); // Resim önizlemesi için
              }
            }
          };
          const [error8, setError8] = useState("");
          const handleCatalog = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 10) {
                setError8("Dosya boyutu 10 MB'den büyük olamaz.");
                setCatalog(null);
              } else {
                setError8("");
                setCatalog(file); // Resim önizlemesi için
              }
            }
          };
          const [error9, setError9] = useState("");
          const handleCatalog2 = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 10) {
                setError9("Dosya boyutu 10 MB'den büyük olamaz.");
                setCatalog2(null);
              } else {
                setError9("");
                setCatalog2(file); // Resim önizlemesi için
              }
            }
          };
          const [error10, setError10] = useState("");
          const handleCatalog3 = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 10) {
                setError10("Dosya boyutu 10 MB'den büyük olamaz.");
                setCatalog3(null);
              } else {
                setError10("");
                setCatalog3(file); // Resim önizlemesi için
              }
            }
          };
          const [error11, setError11] = useState("");
          const handleCatalog4 = (event) => {
            const file = event.target.files[0];
            if (file) {
              // Resim boyutunu kontrol et (1 MB = 1024 * 1024 byte)
              const fileSizeInMB = file.size / (1024 * 1024);

              if (fileSizeInMB > 10) {
                setError11("Dosya boyutu 10 MB'den büyük olamaz.");
                setCatalog4(null);
              } else {
                setError11("");
                setCatalog4(file); // Resim önizlemesi için
              }
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
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Hata",
                text: "PDF dokümanı yüklenemedi.",
              });
            }
          };

          const sendImageToServer = async (image, linkId, name, boolean) => {
            try {
              const formData = new FormData();
              formData.append("file", image);
              formData.append("linkId", values.linkId);
              formData.append("name", name);
              formData.append("isGallery", boolean);

              const jsonData = {
                file: image,
                linkId: values.linkId,
                name: name,
                isGallery: boolean,
              };
              const token = localStorage.getItem("token");
              const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              };

              const response = await axios.post(
                "https://ecoqrcode.com/businessCard/upload",
                formData,
                { headers }
              );
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Hata",
                text: "PDF dokümanı yüklenemedi.",
              });
            }
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
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Hata",
                text: "PDF dokümanı yüklenemedi.",
              });
            }
          };

          const submitHandle = async (e) => {
            e.preventDefault(); // Prevent default form submission

            // Prepare bank information with digitalCardId
            const bankInformation = values.bankInformationList
              .filter(
                (bankInfo) =>
                  bankInfo.iban && bankInfo.bankName && bankInfo.accountName
              )
              .map((bankInfo) => ({
                ...bankInfo, // Spread existing bank info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            // Prepare warrant of attorney with digitalCardId
            const warrantOfAttorney = values.warrantOfAttorneyDtoList
              .filter(
                (warrant) =>
                  warrant.title && warrant.address && warrant.citizenId // Add other necessary checks
              )
              .map((warrant) => ({
                ...warrant, // Spread existing warrant info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            const linkInfo = values.createLinkInformation
              .filter(
                (link) => link.title && link.link // Add other necessary checks
              )
              .map((link) => ({
                ...link, // Spread existing warrant info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            // Prepare invoice information with digitalCardId
            const invoiceInformation = values.invoiceInformationList
              .filter(
                (invoice) =>
                  invoice.title &&
                  invoice.address &&
                  invoice.taxNumber &&
                  invoice.taxOffice // Add other necessary checks
              )
              .map((invoice) => ({
                ...invoice, // Spread existing invoice info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            const token = localStorage.getItem("token");
            const headers = {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            };

            try {
              // Post bank information
              const bankResponse = await axios.post(
                "https://ecoqrcode.com/bankInformation/createBankInformation",
                bankInformation,
                { headers }
              );

              // Post warrant of attorney
              const warrantResponse = await axios.post(
                "https://ecoqrcode.com/warrantOfAttorney/createWarrantOfAttorney",
                warrantOfAttorney,
                { headers }
              );

              // Handle success for warrant of attorney

              // Post invoice information
              const invoiceResponse = await axios.post(
                "https://ecoqrcode.com/invoiceInformation/createInvoiceInformation",
                invoiceInformation,
                { headers }
              );

              // Handle success for invoice information

              const linkResponse = await axios.post(
                "https://ecoqrcode.com/linkInformation/createLinkInformation",
                linkInfo,
                { headers }
              );

              navigate(`/${values.linkId}`);
            } catch (error) {
              console.error("Error:", error);
              // Handle error (e.g., show an error message)
            }
          };

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
          const [showInputDiscord, setShowInputDiscord] = useState(false);
          const showDiscord = () => {
            setShowInputDiscord(!showInputDiscord);
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
          const [showInputWeChat, setShowInputWeChat] = useState(false);
          const showWeChat = () => {
            setShowInputWeChat(!showInputWeChat);
          };

          const [showInputWhatsappBusiness, setShowWhatsappBusiness] =
            useState(false);
          const showWhatsappBusiness = () => {
            setShowWhatsappBusiness(!showInputWhatsappBusiness);
          };
          const [showInputCiceksepeti, setShowInputCiceksepeti] =
            useState(false);
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

          const [showInputHepsiburada, setShowInputHepsiburada] =
            useState(false);
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
          const [showInputBank, setShowInputBank] = useState(false);
          const handleBank = () => {
            setShowInputBank(!showInputBank);
          };

          const [showInputBank2, setShowInputBank2] = useState(false);
          const handleBank2 = () => {
            setShowInputBank2(!showInputBank2);
          };

          const [showInputBank3, setShowInputBank3] = useState(false);
          const handleBank3 = () => {
            setShowInputBank3(!showInputBank3);
          };

          const [showInputBank4, setShowInputBank4] = useState(false);
          const handleBank4 = () => {
            setShowInputBank4(!showInputBank4);
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

          const showBusiness = () => {
            setShowBusinessStore(!showBusinessStore);
          };

          const showLinks = () => {
            setShowLink(!showLink);
          };

          return (
            <Form className="p-7 font-montserrat">
              {values.step === 1 && (
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
                      İÇERİK
                    </h3>
                  </header>
                  <div className="flex flex-col w-full mb-3">
                    <div className="flex items-center">
                      <div
                        disabled
                        className="input text-gray-600 mr-0.5 bg-zinc-300 flex items-center justify-center"
                      >
                        pruvatag.com/
                      </div>
                      <Field
                        name="linkId"
                        className="input w-full"
                        placeholder="Sayfanızın URL'si"
                      />
                    </div>

                    <ErrorMessage
                      name="linkId"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="md:flex md:flex-row flex-wrap space-y-3 ">
                    <div className="flex pt-3 flex-col md:basis-1/2 md:pr-1.5">
                      <Field name="name" className="input" placeholder="Ad" />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="surname"
                        className="input"
                        placeholder="Soyad"
                      />
                      <ErrorMessage
                        name="surname"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="title"
                        className="input"
                        placeholder="Şirketiniz"
                      />
                      <ErrorMessage
                        name="title"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="description"
                        className="input"
                        placeholder="Unvanınız"
                      />
                      <ErrorMessage
                        name="description"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="firm"
                        className="input"
                        placeholder="Açıklama"
                      />
                      <ErrorMessage
                        name="firm"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="phoneNumber1"
                        className="input"
                        placeholder="Telefon numarası"
                      />
                      <ErrorMessage
                        name="phoneNumber1"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="email"
                        className="input"
                        disabled
                        placeholder="E-posta"
                        value={localStrogeEmail}
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="website"
                        className="input"
                        placeholder="İnternet sitesi"
                      />
                      <ErrorMessage
                        name="website"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="location"
                        className="input"
                        placeholder="https://www.google.com/maps/place/konum_adı/@enlem, boylam, zoom_level"
                      />
                      <ErrorMessage
                        name="location"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
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
                          <Field
                            name="instagram"
                            className="input mt-3"
                            placeholder="https://www.instagram.com/kullanici_adi/"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
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
                          <Field
                            name="twitter"
                            className="input mt-3"
                            placeholder="https://x.com/kullanici_adi"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showTelegram}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-sky-500">
                          Telegram
                        </span>

                        <img src={telegram} className="w-6" />
                      </button>
                      {showInputTelegram && (
                        <>
                          <Field
                            name="telegram"
                            className="input mt-3"
                            placeholder="https://t.me/kullanici_adi"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showDiscord}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-blue-600">
                          Discord
                        </span>

                        <img src={discord} className="w-6" />
                      </button>
                      {showInputDiscord && (
                        <>
                          <Field
                            name="discord"
                            className="input mt-3"
                            placeholder="https://discord.gg/sunucu_kodu"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showFacebook}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-sky-600">
                          Facebook
                        </span>

                        <img src={facebook} className="w-6" />
                      </button>
                      {showInputFacebook && (
                        <>
                          <Field
                            name="facebook"
                            className="input mt-3"
                            placeholder="https://www.facebook.com/kullanici_adi"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showWhatshapp}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-green-600">
                          Whatshapp
                        </span>

                        <img src={whatsapp} className="w-6" />
                      </button>
                      {showInputWhatshapp && (
                        <>
                          <Field
                            name="whatsapp"
                            className="input mt-3"
                            placeholder="05555555555"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showLinkedin}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-sky-600">
                          Linkedin
                        </span>

                        <img src={linkedin} className="w-6" />
                      </button>
                      {showInputLinkedin && (
                        <>
                          <Field
                            name="linkedin"
                            className="input mt-3"
                            placeholder="https://www.linkedin.com/in/kullanici_adi"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showYoutube}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-red-600">
                          Youtube
                        </span>

                        <img src={youtube} className="w-6" />
                      </button>
                      {showInputYoutube && (
                        <>
                          <Field
                            name="youtube"
                            className="input mt-3"
                            placeholder="https://www.youtube.com/channel/UCxxxxxxxxxxxxxx"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
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
                          <Field
                            name="whatsappBusiness"
                            className="input mt-3"
                            placeholder="05555555555"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showWeChat}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-emerald-600">
                          WeChat
                        </span>

                        <img src={wechat} className="w-6" />
                      </button>
                      {showInputWeChat && (
                        <>
                          <Field
                            name="wechat"
                            className="input mt-3"
                            placeholder="WeChat"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5"></div>
                    <button
                      type="button"
                      onClick={showBusiness}
                      className="flex flex-col w-full md:pl-1.5 "
                    >
                      <span className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center my-2">
                        {" "}
                        PAZAR YERİ EKLE +
                      </span>
                    </button>
                    {/* pazar yerleri start*/}
                    {showBusinessStore && (
                      <div className="md:flex md:flex-row flex-wrap  w-full ">
                        {" "}
                        <div className="flex flex-col md:basis-1/2 md:pr-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showCiceksepeti}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-blue-700">
                              Çiçek Sepeti
                            </span>
                          </button>
                          {showInputCiceksepeti && (
                            <>
                              <Field
                                name="cicekSepeti"
                                className="input mt-3"
                                placeholder="https://www.ciceksepeti.com/magaza/magaza-adi"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex flex-col md:basis-1/2 md:pl-1.5 mb-3">
                          <button
                            type="button"
                            onClick={showSahibinden}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-[9px] rounded "
                          >
                            <span className="font-medium text-yellow-300">
                              Sahibinden
                            </span>
                          </button>
                          {showInputSahibinden && (
                            <>
                              <Field
                                name="sahibinden"
                                className="input mt-3"
                                placeholder="https://www.sahibinden.com/mağaza/mağaza_adı"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex flex-col md:basis-1/2 md:pr-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showTrendyol}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-orange-500">
                              Trendyol
                            </span>
                          </button>
                          {showInputTrendyol && (
                            <>
                              <Field
                                name="trendyol"
                                className="input mt-3"
                                placeholder="https://www.trendyol.com/mağaza/mağaza-adi"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex flex-col md:basis-1/2 md:pl-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showHepsiburada}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-orange-500">
                              Hepsiburada
                            </span>
                          </button>
                          {showInputHepsiburada && (
                            <>
                              <Field
                                name="hepsiburada"
                                className="input mt-3"
                                placeholder="https://www.hepsiburada.com/mağaza/mağaza-adi"
                              />
                            </>
                          )}
                        </div>{" "}
                        <div className="flex flex-col md:basis-1/2 md:pr-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showN11}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-[#0033A0]">
                              N11
                            </span>
                          </button>
                          {showInputN11 && (
                            <>
                              <Field
                                name="n11"
                                className="input mt-3"
                                placeholder="https://www.n11.com/mağaza/[mağaza-adi]"
                              />
                            </>
                          )}
                        </div>{" "}
                        <div className="flex flex-col md:basis-1/2 md:pl-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showAmazon}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-[#ff9900]">
                              Amazon
                            </span>
                          </button>
                          {showInputAmazon && (
                            <>
                              <Field
                                name="amazon"
                                className="input mt-3"
                                placeholder="https://www.amazon.com/shops/[mağaza-adi]"
                              />
                            </>
                          )}
                        </div>{" "}
                        <div className="flex flex-col md:basis-1/2 md:pr-1.5 pb-3">
                          <button
                            type="button"
                            onClick={showGetir}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-purple-500">
                              Getir
                            </span>
                          </button>
                          {showInputGetir && (
                            <>
                              <Field
                                name="getir"
                                className="input mt-3"
                                placeholder="https://getir.com/[mağaza-adi]"
                              />
                            </>
                          )}
                        </div>{" "}
                        <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                          <button
                            type="button"
                            onClick={showePttAvm}
                            className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                          >
                            <span className="font-medium text-[#0033A0]">
                              PttAVM
                            </span>
                          </button>
                          {showInputePttAvm && (
                            <>
                              <Field
                                name="epttAvm"
                                className="input mt-3"
                                placeholder="https://www.pttavm.com/mağaza/[mağaza-adi]"
                              />
                            </>
                          )}
                        </div>{" "}
                      </div>
                    )}

                    {/* pazar yerleri end */}

                    {/* bağlantı ekle */}

                    <button
                      type="button"
                      onClick={showLinks}
                      className="flex flex-col w-full md:pl-1.5 pt-4 md:pt-0"
                    >
                      <span className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center my-2">
                        {" "}
                        BAĞLANTI EKLE +
                      </span>
                    </button>
                    <div className="flex flex-col  w-full space-y-3 ">
                      {" "}
                      <div className="w-full ">
                        {showLink && (
                          <div className="md:flex md:flex-row flex-col space-y-3 md:space-y-0 items-center w-full">
                            <div
                              disabled
                              className="h-10 rounded px-2 outline-none border border-zinc-400 text-sm focus:border-black text-gray-600 md:mr-1 bg-zinc-300 flex items-center justify-center"
                            >
                              <img src={link} className="w-9" />
                            </div>
                            <Field
                              name="createLinkInformation[0].title"
                              className="input w-full  md:w-1/3 mr-1"
                              placeholder="Bağlantı başlığı"
                            />
                            <Field
                              name="createLinkInformation[0].link"
                              className="input w-full"
                              placeholder="Bağlantı url"
                            />
                          </div>
                        )}
                      </div>
                      <div className="w-full  ">
                        {showLink && (
                          <div className="md:flex md:flex-row flex-col space-y-3 md:space-y-0 items-center basis-1/2">
                            <div
                              disabled
                              className="h-10 rounded px-2 outline-none border border-zinc-400 text-sm focus:border-black text-gray-600 md:mr-1 bg-zinc-300 flex items-center justify-center"
                            >
                              <img src={link} className="w-9" />
                            </div>
                            <Field
                              name="createLinkInformation[1].title"
                              className="input w-full md:w-1/3 mr-1"
                              placeholder="Bağlantı başlığı"
                            />
                            <Field
                              name="createLinkInformation[1].link"
                              className="input w-full"
                              placeholder="Bağlantı url"
                            />
                          </div>
                        )}
                      </div>
                      <div className="w-full  ">
                        {showLink && (
                          <div className="md:flex md:flex-row flex-col space-y-3 md:space-y-0 items-center w-full">
                            <div
                              disabled
                              className="h-10 rounded px-2 outline-none border border-zinc-400 text-sm focus:border-black text-gray-600 md:mr-1 bg-zinc-300 flex items-center justify-center"
                            >
                              <img src={link} className="w-9" />
                            </div>
                            <Field
                              name="createLinkInformation[2].title"
                              className="input w-full md:w-1/3  mr-1"
                              placeholder="Bağlantı başlığı"
                            />
                            <Field
                              name="createLinkInformation[2].link"
                              className="input w-full"
                              placeholder="Bağlantı url"
                            />
                          </div>
                        )}
                      </div>
                      <div className="w-full ">
                        {showLink && (
                          <div className="md:flex md:flex-row flex-col space-y-3 md:space-y-0 items-center w-full">
                            <div
                              disabled
                              className="h-10 rounded px-2 outline-none border border-zinc-400 text-sm focus:border-black text-gray-600 md:mr-1 bg-zinc-300 flex items-center justify-center"
                            >
                              <img src={link} className="w-9" />
                            </div>
                            <Field
                              name="createLinkInformation[3].title"
                              className="input w-full  md:w-1/3 mr-1"
                              placeholder="Bağlantı başlığı"
                            />
                            <Field
                              name="createLinkInformation[3].link"
                              className="input w-full"
                              placeholder="Bağlantı url"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* bağlantı ekle */}
                  </div>
                  <hr className="mt-8" />
                  <h3 className="text-lg font-medium text-zinc-700 mt-4 md:mt-8 pb-3">
                    FOTOĞRAFLAR
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2.5">
                    <div className="flex flex-col">
                      <label htmlFor="photo1" className="text-sm">
                        Profil Fotoğrafı
                      </label>
                      <h3 className="text-sm py-3 text-red-500">
                        * Önerilen Boyut: 300x300 piksel (veya tercihinize göre
                        başka bir kare boyut)
                      </h3>
                      <input
                        id="photo1"
                        name="photo1"
                        type="file"
                        accept="image/*"
                        onChange={handleImage1Change}
                        className="input pt-1.5  mt-1"
                      />
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      {image1 && (
                        <img
                          src={URL.createObjectURL(image1)}
                          alt="Photo 1"
                          className="h-[300px] w-[300px] object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photo2" className="text-sm">
                        Banner Fotoğrafı
                      </label>
                      <h3 className="text-sm py-3 text-red-500">
                        * Önerilen Boyut: 400x300 piksel (veya tercihinize göre
                        başka bir geniş ekran boyut)
                      </h3>
                      <input
                        id="photo2"
                        name="photo2"
                        type="file"
                        accept="image/*"
                        onChange={handleImage2Change}
                        className="input pt-1.5 mt-1"
                      />
                      {error2 && <p style={{ color: "red" }}>{error2}</p>}
                      {image2 && (
                        <img
                          src={URL.createObjectURL(image2)}
                          alt="Photo 2"
                          className="h-[300px] w-[400px] object-cover"
                        />
                      )}
                    </div>
                  </div>
                  {/* gallery */}
                  <div className="space-y-5 mt-10">
                    <button className="text-lg font-medium text-zinc-700 mt-3 md:mt-6">
                      GALERİYE FOTOĞRAF EKLE
                    </button>
                    <h3 className="text-sm  text-red-500">
                      * Önerilen Boyut: 370x370 piksel (veya tercihinize göre
                      başka bir geniş ekran boyut)
                    </h3>
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
                              {error3 && (
                                <p style={{ color: "red" }}>{error3}</p>
                              )}
                              {image3 && (
                                <img
                                  src={URL.createObjectURL(image3)}
                                  alt="Photo 3"
                                  className="h-[370px] w-[370px]  object-cover"
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
                              {error4 && (
                                <p style={{ color: "red" }}>{error4}</p>
                              )}
                              {image4 && (
                                <img
                                  src={URL.createObjectURL(image4)}
                                  alt="Photo 4"
                                  className="h-[370px] w-[370px]  object-cover"
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
                              {error5 && (
                                <p style={{ color: "red" }}>{error5}</p>
                              )}
                              {image5 && (
                                <img
                                  src={URL.createObjectURL(image5)}
                                  alt="Photo 5"
                                  className="h-[370px] w-[370px]  object-cover"
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
                              {error6 && (
                                <p style={{ color: "red" }}>{error6}</p>
                              )}
                              {image6 && (
                                <img
                                  src={URL.createObjectURL(image6)}
                                  alt="Photo 6"
                                  className="h-[370px] w-[370px]  object-cover"
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
                            {error7 && <p style={{ color: "red" }}>{error7}</p>}
                            {image7 && (
                              <img
                                src={URL.createObjectURL(image7)}
                                alt="Photo 7"
                              className="h-[370px] w-[370px]  object-cover"
                              />
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* gallery */}
                  {/* pdf */}
                  <div className="space-y-5">
                    <div className="text-lg font-medium text-zinc-700 mt-3 md:mt-6">
                      PDF / KATALOG EKLE
                    </div>

                    <button
                      type="button"
                      onClick={handlePdf}
                      className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center mt-2"
                    >
                      PDF EKLE +
                    </button>

                    <div className="grid md:grid-cols-2 gap-2.5">
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
                              {error8 && (
                                <p style={{ color: "red" }}>{error8}</p>
                              )}
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
                              {error9 && (
                                <p style={{ color: "red" }}>{error9}</p>
                              )}
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
                    <div className="grid md:grid-cols-2 gap-2.5">
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
                              {error10 && (
                                <p style={{ color: "red" }}>{error10}</p>
                              )}
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
                              {error11 && (
                                <p style={{ color: "red" }}>{error11}</p>
                              )}
                              {catalog4 && <p>{catalog4.name}</p>}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* pdf */}

                  <>
                    <hr className="mt-8" />
                    <header>
                      <h3 className="text-lg font-medium text-zinc-700 mt-5 md:mt-8 mb-2">
                        TASARIM
                      </h3>
                    </header>
                    <div className="flex gap-2 md:gap-5">
                      <div>
                        <span className="flex font-medium mb-2">
                          Kurumsal Tasarım
                        </span>
                        <div className="flex  md:pr-56  rounded-lg mb-5 flex-col items-center">
                          <label>
                            <input
                              type="radio"
                              name="selectedTheme"
                              value="1"
                              checked={values.themeId === 1}
                              onChange={() => setFieldValue("themeId", 1)}
                              className="hidden"
                            />
                            <div className="flex gap-2">
                              <img
                                src={theme1}
                                alt="Theme 1"
                                className={classNames(
                                  "cursor-pointer w-full shadow-lg",
                                  {
                                    "border-2 border-blue-500 rounded":
                                      values.themeId === 1,
                                  }
                                )}
                              />
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <span className="font-medium mb-4">
                          Bireysel Tasarım
                        </span>
                        <div className="flex md:pr-56  rounded-lg mb-5 flex-col items-center mt-2">
                          <label>
                            <input
                              type="radio"
                              name="selectedTheme"
                              value="1"
                              checked={values.themeId === 2}
                              onChange={() => setFieldValue("themeId", 2)}
                              className="hidden"
                            />
                            <div className="flex gap-2">
                              <img
                                src={theme2}
                                alt="Theme 1"
                                className={classNames(
                                  "cursor-pointer w-full shadow-lg",
                                  {
                                    "border-2 border-blue-500 rounded":
                                      values.themeId === 2,
                                  }
                                )}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
              {values.step === 2 && (
                <div className="md:flex md:flex-row flex-wrap space-y-3 ">
                  <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                    BANKA BİLGİLERİ - 1
                  </div>

                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="bankInformationList[0].iban"
                      className="input"
                      placeholder="IBAN"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].iban"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="bankInformationList[0].bankName"
                      className="input"
                      placeholder="Banka ismi"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].bankName"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="bankInformationList[0].accountName"
                      className="input"
                      placeholder="Hesap adı"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].accountName"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  <button
                    type="button"
                    onClick={handleBank}
                    className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                  >
                    BANKA BİLGİSİ EKLE +
                  </button>
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 2
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[1].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[1].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[1].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank2}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank2 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 3
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[2].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[2].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[2].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank3}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank3 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 4
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[3].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[3].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[3].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank4}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank4 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 5
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[4].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[4].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[4].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                    </>
                  )}
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>
                  <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                    FATURA BİLGİLERİ
                  </div>
                  {/* invoice */}

                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="invoiceInformationList[0].title"
                      className="input"
                      placeholder="Firma Ünvanı"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].title"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="invoiceInformationList[0].address"
                      className="input"
                      placeholder="Adres"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].address"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="invoiceInformationList[0].taxNumber"
                      className="input"
                      placeholder="Vergi Numarası"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].taxNumber"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="invoiceInformationList[0].taxOffice"
                      className="input"
                      placeholder="Vergi Dairesi"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].taxOffice"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>

                  {/* invoice */}
                  <div className="font-medium text-zinc-600 text-sm w-full pt-10">
                    VEKALET BİLGİLERİ
                  </div>
                  {/* warrantOfAttorneyDtoListk */}
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].title"
                      className="input"
                      placeholder="Vekalet başlığı"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].title"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].address"
                      className="input"
                      placeholder="Adres"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].address"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].citizenId"
                      className="input"
                      placeholder="TC Kimlik Numarası"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].citizenId"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].registerNo"
                      className="input"
                      placeholder="Kayıt Numarası"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].registerNo"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].barAssociation"
                      className="input"
                      placeholder="Baro"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].barAssociation"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className=" flex-col md:basis-1/2 hidden md:block md:opacity-0"></div>
                  {/* warrantOfAttorneyDtoListk */}
                </div>
              )}
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {values.step === 1 && (
                  <>
                    <div />
                    <button
                      onClick={nextHandle}
                      type="button"
                      className="bg-emerald-600 w-28 disabled:opacity-50 justify-self-end text-white rounded h-10 text-sm"
                      disabled={!isValid || !dirty}
                    >
                      İLERİ
                    </button>
                  </>
                )}
                {values.step === 2 && (
                  <>
                    <div></div>
                    <button
                      type="button"
                      onClick={submitHandle}
                      className="bg-emerald-600 w-28 disabled:opacity-50 justify-self-end text-white rounded h-10 text-sm"
                    >
                      TAMAMLA
                    </button>
                  </>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default CardCreate;
