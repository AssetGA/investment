"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Button from "./Button";
import DropdownMenu from "./DropDownMenu";

const NavbarResp = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("open");
    setDropdownOpen(true);
  };

  const toggleDropdownClose = () => {
    console.log("down");
    setTimeout(setDropdownOpen(false), 3000);
  };

  console.log(isDropdownOpen);

  return (
    <>
      <div className="flex flex-col md:hidden z-30 fixed top-0 left-0 right-0 h-[60px] bg-emerald-800 [&>*]:my-auto py-3">
        <Button
          className=" text-white px-2"
          handleClick={toggleDropdown}
          buttonName={<IoMdMenu size="2rem" />}
        ></Button>
        <div className={isDropdownOpen ? "-translate-y-16" : "hidden"}>
          <DropdownMenu onClose={toggleDropdownClose} />
        </div>
      </div>
    </>
  );
};

export default NavbarResp;
