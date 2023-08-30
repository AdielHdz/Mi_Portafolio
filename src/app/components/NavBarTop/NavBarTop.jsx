"use client";
import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
const NavBarTop = () => {
  const handlerTheme = (e) => {
    const value = e.target.checked;
    if (value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="sticky z-20 top-0 h-16 flex items-center justify-between p-3 bg-blue_gray dark:bg-blacks dark:shadow-little_dark text-whites">
      <h3 className="text-lg">{"{ AH }"}</h3>
      <label
        className="relative w-12 h-6  bg-whites peer-checked:bg-rose-400 rounded-full"
        htmlFor="theme"
      >
        <input
          type="checkbox"
          id="theme"
          className="peer hidden"
          onChange={handlerTheme}
        />
        <div
          htmlFor="theme"
          className="absolute shadow-little bg-gray-500 w-5 h-5 rounded-full top-0.5 left-0.5 transform transition-all duration-200 peer-checked:translate-x-6 peer-checked:bg-blacks"
        ></div>
      </label>
      {/*   <input type="checkbox" id="menu" className="hidden peer" />
      <label
        htmlFor="menu"
        className="transition-colors duration-300 h-10 w-10 rounded-full cursor-pointer hover:bg-whites flex items-center justify-center hover:text-veryDarkGray md:hidden"
      >
        <CiMenuKebab className="w-8 h-8 transform rotate-90" />
      </label>

      <section className="fixed  top-0 right-0 md:inline-block md:relative md:h-auto md:w-auto md:opacity-100 md:transform-none bg-veryDarkGray opacity-0 h-screen w-full transform translate-x-full -translate-y-full transition-all peer-checked:opacity-100 duration-300 peer-checked:-translate-x-0 peer-checked:translate-y-0 flex justify-center items-center shadow-lg">
        <label
          htmlFor="menu"
          className="absolute top-2 right-2 md:hidden w-8 h-8  flex items-center justify-center"
        >
          <div className="absolute w-5 h-0 border border-teal-500 bg-teal-500 rotate-45"></div>
          <div className="absolute w-5 h-0 border border-teal-500 bg-teal-500 -rotate-45"></div>
        </label>
        <Link className="text-whites text-lg" href="#">
          About
        </Link>
      </section> */}
    </nav>
  );
};

export default NavBarTop;
