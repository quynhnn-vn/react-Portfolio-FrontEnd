import React from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";

export function Contact() {
  return (
    <section id="contact" className="relative pt-10">
      <AtSymbolIcon className="mx-auto text-center w-10 mb-4" />
      <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-4 text-white">
        Contact Me
      </h1>
      <div className="container px-5 py-10 mx-auto flex items-center justify-center">
        <div className="lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 lg:p-36 p-20 relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Orsay+91400&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Orsay 91400 <br />
                Ile-de-France
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-yellow-300 leading-relaxed"
                href="mailto:nguyen.nhu.quynh.1993@gmail.com"
              >
                nguyen.nhu.quynh.1993@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+33 7 68 91 ** **</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
