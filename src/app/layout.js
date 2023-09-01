"use client";
import "./globals.css";
import { Itim, Jaldi } from "next/font/google";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";
const itim = Itim({ subsets: ["latin"], weight: "400" });
const jaldi = Jaldi({
  subsets: ["latin"],
  weight: ["400", "700"],
});
import NavBarTop from "./components/NavBarTop/NavBarTop";
import { useEffect, useRef, useState } from "react";

export default function RootLayout({ children }) {
  const lastScrollPosition = useRef(0);
  const [isNavsHidden, setNavIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /*   console.log("Se ha detectado movimiento"); */
      let scrollPosition = document.documentElement.scrollTop;
      /*    console.log("lastScrollPosition", lastScrollPosition.current);
      console.log("scrollPosition", scrollPosition);
      console.log("limit scroll", limitScroll.current); */
      if (scrollPosition > lastScrollPosition.current) {
        setNavIsHidden(true);
      } else {
        setNavIsHidden(false);
      }

      lastScrollPosition.current = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="es">
      <head>
        <title>Adiel Hernández</title>
        <meta name="description" content="Description" />
      </head>
      <body className=" font-jaldi dark:bg-slate-950">
        <NavBarTop isNavsHidden={isNavsHidden} />

        {children}

        <NavBarBottom isNavsHidden={isNavsHidden} />
      </body>
    </html>
  );
}
