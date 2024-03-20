"use client";

import Link from "next/link";
import React from "react";
import { MdDomainVerification } from "react-icons/md";

const DropdownMenu = ({ onClose }) => {
  return (
    <div className="w-72 h-screen mt-4 border border-gray-300 shadow-md bg-emerald-400">
      {/* Dropdown content goes here */}
      <ul className="mt-20">
        <li className="py-5">
          <Link
            href="/"
            className="flex flex-raw p-3 bg-emerald-500 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold text-3xl"
            onClick={onClose}
          >
            <MdDomainVerification style={{ color: "blue", margin: 5 }} />
            <p className="px-6">Главная</p>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="flex flex-row-reverse p-3 bg-emerald-400 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold text-xl"
            onClick={onClose}
          >
            <p className="px-2 py-2">О нас</p>
          </Link>
        </li>
        <li>
          <Link
            href="/cooperation"
            className="flex flex-row-reverse p-3 bg-emerald-400 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold text-xl"
            onClick={onClose}
          >
            <p className="px-2 py-2">Франшиза</p>
          </Link>
        </li>
        <li>
          <Link
            href="/investment"
            className="flex flex-row-reverse p-3 bg-emerald-400 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold text-xl"
            onClick={onClose}
          >
            <p className="px-2 py-2">Инвестиции</p>
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="flex flex-row-reverse p-3 bg-emerald-400 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold text-xl"
            onClick={onClose}
          >
            <p className="px-2 py-2">Контакты</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
