import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-emerald-800">
      <div className="container h-full flex text-white my-5">
        <div className="flex flex-col sm:flex-row ">
          <p className="py-5 px-10 ">2024 Kazakstan</p>
          <div className="py-10 px-10">
            <h6 className="flex justify-center font-semibold uppercase md:justify-start py-5">
              Мы в социальных сетях
            </h6>
            <p className="mb-4">
              <a
                href="https://www.instagram.com/game_tsg_go?igsh=YzAwZjE1ZTI0Zg=="
                className=" bg-red-200"
              >
                <FaInstagram className="bg-red-500 rounded-sm w-8 h-8" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
