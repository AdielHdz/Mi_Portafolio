import { BiSolidFace } from "react-icons/bi";
import { CgSmartphoneChip } from "react-icons/cg";
import { RxBackpack } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
const NavBarBottom = () => {
  return (
    <nav className="fixed -z-10 w-noventaCinco bottom-2 left-0 right-0 shadow-md bg-veryDarkGray m-auto flex items-center justify-evenly h-14 rounded-full">
      <BiSolidFace className="text-whites w-7 h-7 " />
      <CgSmartphoneChip className="text-whites w-7 h-7 " />
      <RxBackpack className="text-whites w-7 h-7" />
      <RiContactsLine className=" w-7 h-7 text-whites" />
      {/* <div className="absolute right-10 bottom-2 border border-green-500  w-9 "></div> */}
    </nav>
  );
};

export default NavBarBottom;
