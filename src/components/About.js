import React from "react";

export const About = () => {
  return (
    <section id="description">
      <div className="container mx-auto flex px-10 pt-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-white">
            Hi, my name is Quynh.
            <br className="hidden lg:inline-block" />
            <br />
            I'm a front end developer from Brest, Brittany.
            <br />
          </h1>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 hover:text-black rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="#about"
              className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 hover:text-black rounded text-lg"
            >
              About Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
};
