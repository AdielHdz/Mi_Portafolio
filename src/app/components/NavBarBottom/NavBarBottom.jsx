"use client";
import { TbFaceId } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";
import { RxBackpack } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";
const NavBarBottom = ({ isNavsHidden }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav
      className={`${
        isNavsHidden ? " translate-y-full -bottom-0" : " opacity-100 bottom-2"
      } transform transition duration-300 fixed px-7 z-0 w-noventaCinco  left-0 right-0 shadow-mid dark:shadow-mid_white bg-whites text-gray-700 dark:bg-blacks dark:bg-opacity-80 m-auto flex items-center justify-between h-14 rounded-full dark:text-whites`}
    >
      <a
        href="#quiensoy"
        className={`transform transition-all duration-100 ${
          isActive
            ? " scale-125 text-rose-500 shadow-little rounded-full "
            : "scale-100"
        }`}
      >
        <TbFaceId className=" w-7 h-7" onClick={() => setIsActive(!isActive)} />
      </a>
      <a href="#tecnologias">
        <CgSmartphoneChip className=" w-7 h-7 " />
      </a>

      <a href="#proyectos">
        <RxBackpack className=" w-7 h-7" />
      </a>
      <RiContactsLine className=" w-7 h-7 " />
      {/* <div className="absolute right-10 bottom-2 border border-green-500  w-9 "></div> */}
    </nav>
  );
};

export default NavBarBottom;
