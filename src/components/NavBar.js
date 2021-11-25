import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export function NavBar() {
  return (
    <header className="bg-yellow-300 bg-opacity-90 md:sticky top-0 z-20 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#description" className="title-font text-black mb-4 md:mb-0 ml-3 text-2xl">
            Nhu Quynh NGUYEN
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-black justify-center">
          <a href="#projects" className="mr-5 text-lg hover:text-gray-400">
            Work
          </a>
          <a href="#about" className="mr-5 text-lg hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="mr-5 text-lg hover:text-gray-400">
            Skills
          </a>
          <a href="https://github.com/quynhnn-vn/" target="_blank" rel="noopener noreferrer" className="mr-5 text-lg hover:text-gray-400">
            GitHub
        </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 text-lg focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}