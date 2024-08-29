import React from "react";
import not404 from "/notFound/404.svg";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img
        src={not404}
        className="h-[400px] md:h-[550px] 2xl:h-[800px]"
        alt="svg"
      />
      <div className=" md:pt-10">
        <Link
          to="/"
          className="bg-emerald-600 text-xs tracking-wide md:text-base text-white font-semibold py-2 px-4 md:py-3 md:px-5 rounded-lg"
        >
          ANASAYFAYA DÖN
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
