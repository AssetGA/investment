import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="md:flex hidden justify-center w-full h-20 bg-emerald-800 sticky top-0 place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']">
        <div className="flex h-full items-end">
          <div className="inline-block z-20 max-w-5xl w-full align-bottom font-mono font-bold text-sm lg:flex">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white text-xl">
              <li className="p-1 px-4 rounded hover:text-emerald-500 text-emerald-600 hover:text-xl">
                <Link href="/">
                  <p>Главная</p>
                </Link>
              </li>
              <li className="py-1 px-4 rounded text-emerald-600 hover:text-emerald-500 hover:text-xl">
                <Link href="/about">
                  <p>О нас</p>
                </Link>
              </li>
              <li className="py-1 px-4 rounded hover:bg-emerald-600">
                <Link href="/cooperation">
                  <p>Франшиза</p>
                </Link>
              </li>
              <li className="py-1 px-4 rounded hover:bg-emerald-600">
                <Link href="/investment">
                  <p>Инвестиции</p>
                </Link>
              </li>
              <li className="py-1 px-4 rounded hover:bg-emerald-600">
                <Link href="/contacts">
                  <p>Контакты</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
