"use client";
import { useState } from "react";

const TechViews = () => {
  const [label1, setLabel1Value] = useState(false);
  const [label2, setLabel2Value] = useState(false);
  return (
    <div>
      <h1>Adiel Luciano Hernández Ortegón</h1>
      <h3>Desarrollador Web Full Stack</h3>

      <div className="relative w-1/4 h-12 m-auto flex  items-center justify-center">
        <input
          className="hidden"
          type="checkbox"
          id="label1"
          checked={label1}
          onChange={() => {
            setLabel2Value(false);
            setLabel1Value(true);
          }}
        />
        <label
          className="font-semibold  w-full flex flex-col items-center justify-center cursor-pointer "
          htmlFor="label1"
        >
          Vista grafica
        </label>

        <label
          className=" font-semibold cursor-pointer w-full h-full flex items-center justify-center "
          htmlFor="label2"
        >
          Vista de lista
        </label>
        <input
          className="hidden input2"
          type="checkbox"
          id="label2"
          checked={label2}
          onChange={() => {
            setLabel1Value(false);
            setLabel2Value(true);
          }}
        />
        <div className="select_bar"></div>
      </div>
    </div>
  );
};

export default TechViews;
