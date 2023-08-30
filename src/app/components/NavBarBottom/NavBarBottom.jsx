import { TbFaceId } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";
import { RxBackpack } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
const NavBarBottom = () => {
  return (
    <nav className="fixed px-7 z-0 w-noventaCinco bottom-2 left-0 right-0 shadow-md dark:shadow-little_dark bg-blue_gray dark:bg-blacks m-auto flex items-center justify-between h-14 rounded-full">
      <a href="#quiensoy">
        <TbFaceId className="text-whites w-7 h-7 " />
      </a>
      <a href="#tecnologias">
        <CgSmartphoneChip className="text-whites w-7 h-7 " />
      </a>

      <a href="#proyectos">
        <RxBackpack className="text-whites w-7 h-7" />
      </a>
      <RiContactsLine className=" w-7 h-7 text-whites" />
      {/* <div className="absolute right-10 bottom-2 border border-green-500  w-9 "></div> */}
    </nav>
  );
};

export default NavBarBottom;
