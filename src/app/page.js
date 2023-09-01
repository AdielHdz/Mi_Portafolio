"use client";
import "./globals.css";
import { TbFaceId } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RxBackpack } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import Image from "next/image";
import DealUp from "./assets/DealUp.png";
import Go_trip from "./assets/Go-Trip-logo.png";
import Technologies from "./components/Technologies/Technologies";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SiMinutemailer } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { useState } from "react";

const postTouchHandler = async (touchData) => {
  console.log(touchData);
  await fetch("http://localhost:3001/touch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(touchData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
export default function Home() {
  const [touchData, setTouchData] = useState({
    name: "",
    email: "",
    phone: "",
    overview: "",
  });

  const formDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTouchData({ ...touchData, [name]: value });
    console.log({ ...touchData, [name]: value });
  };

  return (
    <main className="grid gap-5 text-center p-3 dark:bg-slate-950 dark:text-whites pb-20">
      <section>
        <h1 className=" font-itim text-4xl   ">Adiel Hernández</h1>
        <h3 className="m-auto w-max border-b text-lg border-b-veryDarkGray text-blue_gray dark:text-rose-500 ">
          Desarrollador Web Full Stack
        </h3>
      </section>

      <section
        id="quiensoy"
        className=" bg-slate-100 dark:bg-gray-800 rounded-md p-2"
      >
        <h2 className="font-itim text-2xl flex items-center justify-center gap-1 pb-2">
          ¿Quien soy?
          <TbFaceId className="text-rose-500 dark:text-cyan-500 w-7 h-7" />
        </h2>
        <p className="text-lg">
          Amante de la tecnologia y de los emprendimientos, altamente motivado y
          disciplinado para crecer como desarrollador web, estoy en costante
          aprendizaje de las tecnologías más importantes y otras prometedoras,
          aprendiendo de los demas y al mismo tiempo ayudando a mis compañeros.
        </p>
      </section>
      <Technologies />
      <section
        className="grid gap-5 bg-slate-100 rounded-md p-2 py-5 dark:bg-gray-800 dark:text-whites  text-gray-600"
        id="proyectos"
      >
        <h2 className="font-itim text-2xl flex items-center justify-center gap-1 pb-2">
          Proyectos
          <RxBackpack className="text-rose-500 dark:text-cyan-500  w-7 h-7" />
        </h2>
        <div>
          <Image
            src={DealUp}
            width={100}
            height={100}
            alt=""
            className="w-40 m-auto"
          />
          <p className="text-lg ">
            Alrededor del mundo existen ideas brillantes de negocios,
            lamentablemente no todas estas se llevan a cabo por falta de fondos.
            Por otro lado hay personas que tienen buenos ingresos y desean
            invertirlo en algun lugar donde puedan generar ganancias. Así nace
            Deal-Up! Conecta estos dos mundos, los une y crea ventajas para
            ambos clientes.
          </p>
          <Link
            href="#"
            className="text-rose-500 py-3 underline font-itim  flex items-center justify-center gap-2"
          >
            ver detalles
            <BsBoxArrowUpRight className="inline-block w-3 h-3" />
          </Link>
          <div className="w-4/5 m-auto h-0 border border-slate-300 bg-slate-300 "></div>
        </div>
        <div>
          <Image
            src={Go_trip}
            width={100}
            height={100}
            alt="go trip"
            className="w-30 m-auto my-3"
          />
          <p className="text-lg ">
            Aplicación enfocada en satisfacer las necesidades de las personas al
            planear un viaje. Aquí encontrara información sobre hoteles y
            departamentos disponibles en la ciudad que estará hospedándose y no
            solo eso sino que directamente podrá reservar y así estar seguro de
            que tiene un lugar donde pueda disfrutar de su estadía.
          </p>
          <Link
            href="#"
            className="text-rose-500 py-3 underline font-itim  flex items-center justify-center gap-2"
          >
            ver detalles
            <BsBoxArrowUpRight className="inline-block w-3 h-3" />
          </Link>
          <div className="w-4/5 m-auto h-0 border border-slate-300 bg-slate-300 "></div>
        </div>
        <div>
          <h3 className="text-6xl font-dongle">noon</h3>
          <p className="text-lg ">
            Landing page de práctica, consistió en pasarlo de Figma a una
            aplicación de React y CSS puro junto con su deploy.
          </p>
          <Link
            href="#"
            className="text-rose-500 py-3 underline font-itim  flex items-center justify-center gap-2"
          >
            ver detalles
            <BsBoxArrowUpRight className="inline-block w-3 h-3" />
          </Link>
          <div className="w-4/5 m-auto h-0 border border-slate-300 bg-slate-300 "></div>
        </div>
        <h5 className="text-lg">¿Quieres conocer todos mis proyectos?</h5>
        <Link
          href={""}
          className="flex items-center justify-center gap-2 w-max m-auto px-4 py-2 border-2 transition transform duration-200 hover:scale-110 hover:bg-rose-500 hover:text-white border-rose-500 dark:hover:bg-rose-500 dark:hover:text-gray-800 text-rose-500 rounded-md"
        >
          Ver todos <HiOutlineArrowNarrowRight className="w-5 h-5 s" />
        </Link>
      </section>
      <section className="grid gap-3">
        <h2 className="font-itim text-2xl flex items-center justify-center gap-1 pb-2">
          Contactame
          <RiContactsLine className="text-rose-500 dark:text-cyan-500  w-7 h-7" />
        </h2>
        <div></div>
        <div className="grid gap-2">
          <h2 className="font-itim text-2xl flex items-center justify-center gap-1 pb-2">
            ¿Agendamos una reunión?
          </h2>
          <p className="text-lg ">
            Actualmente estoy en busca de empleo si buscas a alguien con ganas
            de crecer y desarrollar su potencial no dudes en contactarme.
          </p>
          <div className="grid gap-5">
            <div className="flex flex-col">
              <label className=" font-semibold text-start tracking-wider">
                Tu nombre
              </label>
              <input
                onChange={formDataHandler}
                value={touchData.name}
                type="text"
                name="name"
                className="h-12 rounded-md border-2 dark:bg-gray-700 border-gray-500 outline-rose-500 dark:outline-none dark:border-cyan-500 px-2 font-itim"
              />
            </div>
            <div className="flex flex-col">
              <label className=" font-semibold text-start tracking-wider">
                Telefono
              </label>
              <input
                onChange={formDataHandler}
                value={touchData.phone}
                type="text"
                name="phone"
                placeholder="Opcional"
                className="h-12 rounded-md border-2 dark:bg-gray-700 border-gray-500 outline-rose-500 dark:outline-none dark:border-cyan-500 px-2 font-itim "
              />
            </div>

            <div className="flex flex-col">
              <label className=" font-semibold flex items-center justify-between tracking-wider">
                Correo
                <BsFillInfoSquareFill className="text-cyan-700 w-5 h-5 dark:text-cyan-500" />
              </label>
              <input
                onChange={formDataHandler}
                value={touchData.email}
                type="email"
                name="email"
                className="h-12 rounded-md border-2 dark:bg-gray-700 border-gray-500 outline-rose-500 dark:outline-none dark:border-cyan-500 px-2 font-itim"
              />
            </div>
            <div className="flex flex-col">
              <label className=" font-semibold flex items-center justify-between tracking-wider">
                Motivo de contacto
                <BsFillInfoSquareFill className="text-cyan-700 w-5 h-5 dark:text-cyan-500" />
              </label>
              <textarea
                onChange={formDataHandler}
                value={touchData.overview}
                name="overview"
                className="h-12 rounded-md border-2 dark:bg-gray-700 border-gray-500 outline-rose-500 dark:outline-none dark:border-cyan-500  px-2 py-1 font-itim"
              />
            </div>
            <button
              onClick={() => postTouchHandler(touchData)}
              className="bg-rose-500 text-whites h-12 text-lg flex justify-center items-center gap-2 rounded-md"
            >
              Contactar <SiMinutemailer className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
