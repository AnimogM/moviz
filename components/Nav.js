import { useRouter } from "next/router";
import React from "react";
import requests from "../utills/requests";

const Nav = () => {
    const router = useRouter()
    return (
      <div className="relative">
        <div className="p-5 flex space-x-10 items-center justify-between no-scrollbar overflow-x-scroll ">
          {Object.entries(requests).map(([key, { title, url }]) => (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="md:text-xl whitespace-nowrap text-md cursor-pointer active:text-red-500 hover:text-white hover:scale-125 transition-all duration-150"
            >
              {title}
            </h2>
          ))}
        </div>
        <div className="absolute top-0 right-0 h-14 opacity-50 w-1/12 bg-gradient-to-l from-[#06202A]"></div>
      </div>
    );
};

export default Nav;
