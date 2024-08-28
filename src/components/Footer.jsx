import React from "react";
import logo from "/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
      }}
      className="shadow mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a to="/">
            <img src={logo} className="h-12" alt="Pruvatag Logo" />
          </a>
          <ul className="flex flex-wrap justify-center md:justify-start  mb-6 mt-3 lg:mt-0 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pruvatag/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
            <li>
              <div className="w-full text-center md:text-start md:w-[250px] space-y-2 mt-5 md:mt-0">
                <p> Mail: bilgi@pruvatag.com</p>
                <p>Telefon: 0532 634 44 52</p>
                <p>
                  Adres: Mahmutbey Mahallesi Taşocağı Yolu Caddesi Balance
                  Güneşli No:19/1A Bağcılar/ İstanbul
                </p>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white text-center ">
          © 2024 <span>Pruvatag™</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
