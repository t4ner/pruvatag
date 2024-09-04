import React, { useState } from "react";
import loginImage from "/bghero/login.jpg";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://ecoqrcode.com/api/auth/forgotPassword", {
        email,
      });

      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Email adresinize yeni şifre iletilmiştir.",
        confirmButtonText: "Tamam",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Bir hata oluştu. Lütfen tekrar deneyin.",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <>
      <div className="bg-gray-500 pb-2">
        <Navbar />
      </div>

      <div className="h-screen w-screen flex justify-center overflow-hidden">
        <div className="basis-1/2 flex items-center justify-center">
          <div className="bg-gradient-to-l from-fuchsia-600 to-blue-600 pb-2 border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6 pb-5">
              Şifremi Unuttum
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="relative my-4 pb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="block w-72 py-1 pt-5 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-green-400 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
                >
                  Email
                </label>
              </div>

              <button
                type="submit"
                className="w-full mb-4 text-lg font-medium mt-6 rounded-full bg-white text-purple-600 hover:bg-gray-600 hover:text-white py-2 transition-colors duration-300"
              >
                Yeni şifre gönder
              </button>
            </form>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:block">
          <img
            src={loginImage}
            alt="Login background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="-mt-20">
        <Footer />
      </div>
    </>
  );
}

export default ForgotPassword;
