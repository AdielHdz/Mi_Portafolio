import "./globals.css";
import { TbFaceId } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RxBackpack } from "react-icons/rx";
import Image from "next/image";
import DealUp from "./assets/DealUp.png";
import Go_trip from "./assets/Go-Trip-logo.png";
import Technologies from "./components/Technologies/Technologies";
import Link from "next/link";
export default function Home() {
  return (
    <main className="grid gap-5 text-center p-3 dark:bg-blacks dark:text-whites pb-20">
      <section>
        <h1 className=" font-itim text-4xl   ">Adiel Hernández</h1>
        <h3 className="m-auto w-max border-b text-lg border-b-veryDarkGray text-blue_gray dark:text-rose-500 ">
          Desarrollador Web Full Stack
        </h3>
      </section>

      <section
        id="quiensoy"
        className=" bg-slate-100 dark:bg-gray-700 rounded-md p-2"
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
        className="grid gap-5 bg-slate-100 rounded-md p-2 dark:bg-gray-700 dark:text-whites  text-gray-600"
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
            alt=""
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
      </section>
    </main>
  );
}
