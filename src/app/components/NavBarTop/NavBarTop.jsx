import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
const NavBarTop = () => {
  return (
    <nav className="sticky top-0 h-16 flex items-center justify-between p-3 bg-veryDarkGray text-whites">
      <h3 className="text-lg">{"{ AH }"}</h3>
      <input type="checkbox" id="menu" className="hidden peer" />
      <label
        htmlFor="menu"
        className="transition-colors duration-300 h-10 w-10 rounded-full cursor-pointer hover:bg-whites flex items-center justify-center hover:text-veryDarkGray md:hidden"
      >
        <CiMenuKebab className="w-8 h-8 transform rotate-90" />
      </label>

      <menu className="fixed top-0 right-0 md:inline-block md:relative md:h-auto md:w-auto md:opacity-100 md:transform-none bg-veryDarkGray opacity-0 h-screen w-full transform translate-x-full -translate-y-full transition-all peer-checked:opacity-100 duration-300 peer-checked:-translate-x-0 peer-checked:translate-y-0 flex justify-center items-center shadow-lg">
        <label
          htmlFor="menu"
          className="absolute top-2 right-2 md:hidden w-8 h-8  flex items-center justify-center"
        >
          <div className="absolute w-5 h-0 border border-blue_icons bg-blue_icons rotate-45"></div>
          <div className="absolute w-5 h-0 border border-blue_icons bg-blue_icons -rotate-45"></div>
        </label>
        <Link className="text-whites text-lg" href="#">
          About
        </Link>
      </menu>
    </nav>
  );
};

export default NavBarTop;
