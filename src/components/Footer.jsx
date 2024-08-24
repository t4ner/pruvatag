import React from "react";
import logo from "/logo/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
      }}
      class="shadow mt-20"
    >
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a to="/">
            <img src={logo} class="h-12" alt="Pruvatag Logo" />
          </a>
          <ul class="flex flex-wrap items-center mb-6 mt-3 lg:mt-0 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white sm:text-center ">
          © 2024 <span>Pruvatag™</span>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
