import React from "react";
import logo from "/logo/logo.png";
import { FaCreditCard, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="flex container items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="w-80" />
        </div>
        <div className="flex items-center gap-x-14 text-white  font-medium pr-40 ">
          <div className="flex items-center gap-x-3">
            {" "}
            <FaCreditCard size={20} /> <p> Kartvizit İşlemleri</p>
          </div>
          <div className="flex items-center gap-x-3">
            <FaUser size={18} />
            <Link to="/login">Giriş Yap</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
