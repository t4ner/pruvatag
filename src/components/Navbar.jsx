import React, { useState } from "react";
import logo from "/logo/logo.png";
import { FaCreditCard, FaUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <header className=" py-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="text-emerald-500 text-4xl font-bold flex gap-2">
          <a href="/">
            <img src={logo} className="w-80  rounded-lg pt-1" />
          </a>
        </div>
        <div
          className={`nav-links duration-500  md:static absolute z-50 bg-white md:min-h-fit min-h-full left-0 ${
            isMenuOpen ? "top-[75px]" : "top-[-100%]"
          } md:w-auto w-full flex px-5`}
        >
          <ul className="flex md:flex-row flex-col z-50  md:hidden md:items-center md:gap-[4vw] gap-2 mt-5">
            <li>
              {/* <Link
                className="hover:text-gray-500 block md:hidden font-semibold text-zinc-500"
                to="/dijital-kartvizit-satin-al"
              >
                DİJİTAL KARTVİZİT SATIN AL
              </Link> */}
            </li>
            {email && (
              <li>
                <Link
                  className=" block md:hidden font-medium "
                  to="/dashboard/digital-business-card-update"
                >
                  <FaCreditCard size={20} /> KARTVİZİT İŞLEMLERİ
                </Link>
              </li>
            )}
            {email ? (
              <button
                onClick={handleLogout}
                className="bg-emerald-400 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500"
              >
                <Link to="/">
                  {" "}
                  <FaUser size={18} /> Çıkış yap
                </Link>
              </button>
            ) : (
              <>
                {/* <button className="bg-orange-300 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  <Link to="/signIn">Üye ol</Link>
                </button> */}
                <button className="bg-emerald-400 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  <Link to="/login">
                    {" "}
                    <FaUser size={18} /> Giriş yap
                  </Link>
                </button>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-x-10 pr-32">
          {/* <Link
            className="hover:text-gray-500 hidden md:block font-semibold text-zinc-500 mr-4"
            to="/dijital-kartvizit-satin-al"
          >
            DİJİTAL KARTVİZİT SATIN AL
          </Link> */}

          {email && (
            <Link
              className=" hidden  font-medium  md:flex items-center gap-x-3 text-white"
              to="/dashboard/digital-business-card-update"
            >
              <FaCreditCard size={20} className="text-white" />
              Kartvizit İşlemleri
            </Link>
          )}

          {email ? (
            <button
              onClick={handleLogout}
              className=" font-medium hidden md:block text-white   duration-500"
            >
              <Link className="flex items-center gap-x-2">
                {" "}
                <FaUser size={18} />
                Çıkış Yap
              </Link>
            </button>
          ) : (
            <>
              {/* <button className="bg-orange-300 font-medium hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
                <Link to="/signIn">Üye ol</Link>
              </button> */}
              <button className="font-medium hidden md:block text-white px-5 py-2 rounded-full  duration-500">
                <Link to="/login" className="flex items-center gap-x-3">
                  {" "}
                  <FaUser size={18} />
                  Giriş Yap
                </Link>
              </button>
            </>
          )}

          {isMenuOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <IoMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
