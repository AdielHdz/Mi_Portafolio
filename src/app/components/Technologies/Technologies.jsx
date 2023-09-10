"use client";
import { CgSmartphoneChip } from "react-icons/cg";
import Image from "next/image";
import HTML_logo from "../../assets/logos/HTML_logo.png";
import CSS_logo from "../../assets/logos/CSS_logo.png";
import JS_logo from "../../assets/logos/javascript_logo.png";
import NODE_logo from "../../assets/logos/node_logo.png";
import FIGMA_logo from "../../assets/logos/figma_logo.png";
import REDUX_logo from "../../assets/logos/redux_logo.png";
import TAILWIND_logo from "../../assets/logos/tailwind-css_logo.svg";
import EXPRESS_logo from "../../assets/logos/express_logo.png";
import SEQUELIZE_logo from "../../assets/logos/sequelize_logo.png";
import POSTGRESQL_logo from "../../assets/logos/postgresql_logo.png";
import REACT_logo from "../../assets/logos/react_logo.png";
import NEXT_logo from "../../assets/logos/next_logo.png";
import TwoOptions from "../TwoOptions/TwoOptions";
import { useState } from "react";

const Technologies = () => {
  const [listView, setListView] = useState(false);

  return (
    <section id="tecnologias" className="grid gap-5">
      <h2 className="font-itim text-2xl flex items-center justify-center gap-1 py-2">
        Tecnologías
        <CgSmartphoneChip className="text-rose-500 dark:text-cyan-500  w-7 h-7" />
      </h2>
      <TwoOptions listView={listView} setListView={setListView} />

      <div className="relative grid overflow-hidden w-full border-2 border-gray-300  rounded-lg dark:border-white ">
        <div
          className={`${
            listView ? "-translate-x-full duration-500" : "   duration-500"
          } flex flex-wrap gap-x-16 gap-y-8 justify-center transform transition-all  w-full py-4 px-2 dark:bg-gray-50 `}
        >
          <Image
            src={HTML_logo}
            alt="html"
            width={500}
            height={500}
            className=" w-12 h-14 object-cover "
          />

          <Image
            src={CSS_logo}
            alt="css"
            width={500}
            height={500}
            className=" w-11"
          />
          <Image
            src={JS_logo}
            alt="javascript"
            width={500}
            height={500}
            className=" w-11 object-contain "
          />
          <Image
            src={REACT_logo}
            alt="javascript"
            width={500}
            height={500}
            className=" w-14 object-contain "
          />
          <Image
            src={NEXT_logo}
            alt="javascript"
            width={500}
            height={500}
            className=" w-16 object-contain  "
          />

          <Image
            src={NODE_logo}
            alt="node"
            width={500}
            height={500}
            className=" w-24 object-contain"
          />
          <Image
            src={FIGMA_logo}
            alt="figma"
            width={500}
            height={500}
            className=" w-24 object-contain"
          />
          <Image
            src={REDUX_logo}
            alt="redux"
            width={500}
            height={500}
            className="  w-28 object-contain "
          />
          <Image
            src={TAILWIND_logo}
            alt="tailwind"
            width={500}
            height={500}
            className=" w-28 "
          />
          <Image
            src={EXPRESS_logo}
            alt="express"
            width={500}
            height={500}
            className=" w-24 object-contain "
          />
          <Image
            src={SEQUELIZE_logo}
            alt="sequelize"
            width={500}
            height={500}
            className=" w-28"
          />
          <Image
            src={POSTGRESQL_logo}
            alt="postgresql"
            width={500}
            height={500}
            className=" w-24 object-contain"
          />
        </div>
        <div
          className={`transform transition-all  ${
            listView ? "  duration-500 " : " translate-x-full  duration-500"
          } grid grid-cols-2  font-itim  absolute top-3 w-full dark:text-whites`}
        >
          <ul>
            <li className="pb-1 font-semibold tracking-widest text-lg dark:text-rose-500">
              Frontend
            </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Next</li>
            <li>Node</li>
            <li>Figma</li>
            <li>Redux & Redux Toolkit</li>
            <li>Tailwind CSS</li>
          </ul>

          <ul>
            <li className="pb-1 font-semibold tracking-widest text-lg dark:text-rose-500">
              Backend
            </li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
