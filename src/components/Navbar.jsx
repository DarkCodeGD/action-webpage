import { useState } from "react";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  let navStyles = `flex flex-col items-start min-w-[300px] h-screen fixed pl-16 py-20 right-0 top-0 gap-6 text-sm text-black md:hidden bg-white transition-all duration-300`;

  return (
    <nav className="absolute top-0 left-0 w-full text-white z-30">
      <div className="flex justify-between items-center m-auto p-4 responsive-margin md:py-8">
        <div>
          <h1 className="text-2xl font-bold">Action</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          <li>
            <a
              href="#!"
              className="opacity-100 hover:opacity-100 transition-opacity duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center"
            >
              Dropdown <HiChevronDown className="ml-2" />
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="md:hidden" onClick={() => setToggleNav(!toggleNav)}>
          <HiBars3 className="size-8" />
        </div>
      </div>

      <ul className={!toggleNav ? navStyles + " right-[-300px]" : navStyles}>
        <li
          className="absolute top-0 right-0 p-6"
          onClick={() => setToggleNav(false)}
        >
          <HiXMark className="size-8" />
        </li>
        <li>
          <a
            href="#!"
            className="opacity-100 text-purple-600 transition-opacity duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center"
          >
            Dropdown <HiChevronDown className="ml-2" />
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
