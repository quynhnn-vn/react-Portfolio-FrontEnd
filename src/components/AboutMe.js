import React from "react";
import { events } from "../data";
import { FingerPrintIcon } from "@heroicons/react/solid";
import { BookmarkIcon } from "@heroicons/react/outline";
import Xarrow from "react-xarrows";

export const AboutMe = () => {
  return (
    <div id="about" className="p-10 bg-gray-800">
      <FingerPrintIcon className="mx-auto text-center w-10 mb-4" />
      <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-12 text-white">
        About Me
      </h1>
      <div className="flex flex-col items-center gap-6">
        {events.map((item, index) => {
          return (
            <div className="flex items-center gap-6">
              {index % 2 !== 1 && (
                <div className="flex flex-row items-center gap-4">
                  <BookmarkIcon
                    className="text-yellow-300 w-8"
                    id={`flag${index}`}
                  />
                  <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {item.time}
                  </h3>
                </div>
              )}
              {index % 2 === 1 && (
                <div className="flex flex-row sm:flex-row-reverse items-center gap-4 ">
                  <BookmarkIcon
                    className="text-yellow-300 w-8"
                    id={`flag${index}`}
                  />
                  <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    {item.time}
                  </h3>
                </div>
              )}
              <div className="max-w-xl flex flex-col items-start gap-1 border-4 border-gray-700 bg-gray-900 px-8 py-8 relative w-full text-justify">
                {item.events.map((event) => {
                  return <p>{event}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Xarrow
        start="flag0"
        end="flag1"
        color="gray"
        strokeWidth="3"
        dashness
        showHead={false}
      />
      <Xarrow
        start="flag1"
        end="flag2"
        color="gray"
        strokeWidth="3"
        dashness
        showHead={false}
      />
      <Xarrow
        start="flag2"
        end="flag3"
        color="gray"
        strokeWidth="3"
        dashness
        showHead={false}
      />
      <Xarrow
        start="flag3"
        end="flag4"
        color="gray"
        strokeWidth="3"
        dashness
        showHead={false}
      />
    </div>
  );
};
