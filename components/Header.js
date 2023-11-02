import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center rounded-full md:border-2 py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
