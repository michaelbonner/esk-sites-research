"use client";

import { useState } from "react";
import { sites } from "./sites";

export const Site = ({ site }: { site: (typeof sites)[0] }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button
        className="w-full flex justify-between items-center py-4 px-6"
        onClick={() => setIsAccordionOpen((io) => !io)}
      >
        <h2 className="m-0">
          {site.name} - {site.urls.length} pages
        </h2>
        <span
          className={`transition-all text-2xl text-gray-500 ${
            isAccordionOpen ? " rotate-90" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"></path>
            <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"></path>
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isAccordionOpen
            ? "grid-cols-[1fr] opacity-100"
            : "grid-cols-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden px-6 ${
            isAccordionOpen ? "h-auto" : "h-0"
          }`}
        >
          <ul>
            {site.urls.map((url) => {
              const displayUrl = url
                .replace("https://energysafekids.org", "")
                .replace(`${site.name}/`, "");
              return (
                <li key={url}>
                  <a href={url}>{displayUrl}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
