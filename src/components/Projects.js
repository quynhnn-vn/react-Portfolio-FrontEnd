import { TerminalIcon, FingerPrintIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-20 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              target="_blank"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full z-10 h-full object-cover object-center opacity-0 hover:opacity-100"
                  src={project.image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-300 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div id="about" className="py-10 bg-gray-800">
        <FingerPrintIcon className="mx-auto text-center w-10 mb-4" />
        <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-4 text-white">
          About Me
        </h1>
        <div className="flex flex-wrap justify-center">
          <img
            className="p-10 w-2/3 lg:w-2/3 md:w-full sm:w-full"
            src="./about.png" alt=""
          />
        </div>
      </div>
    </section>
  );
}
