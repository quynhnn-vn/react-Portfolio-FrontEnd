import React from "react";
import { FingerPrintIcon } from "@heroicons/react/solid";

export const AboutMe = () => {
  return (
    <div id="about" className="py-10 bg-gray-800">
      <FingerPrintIcon className="mx-auto text-center w-10 mb-4" />
      <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-4 text-white">
        About Me
      </h1>
      <div className="flex flex-wrap justify-center">
        <img
          className="p-10 w-2/3 lg:w-2/3 md:w-full sm:w-full"
          src="./about.png"
          alt=""
        />
      </div>
    </div>
  );
};
