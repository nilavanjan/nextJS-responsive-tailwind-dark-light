import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Typed from "react-typed";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import sections from "../config/LinkConfig";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  //   for closing and opening of slide menu on mobile
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className=" w-full flex items-center justify-between mx-auto px-8 py-1 shadow-lg bg-white
     dark:bg-black dark:text-white"
    >
      {/* image for navbar */}

      <Link href="/">
        <button
          onClick={() => {
            nav && handleNav();
          }}
          className="text-red-500 text-2xl"
        >
          <Typed strings={["NILABH ANJAN CHUTIA..."]} typeSpeed={500} />
        </button>
      </Link>

      {/* menu for navbar mapped */}
      <ul className="hidden md:flex ">
        {sections.map((link) => (
          <li key={link.name} className="md:ml-8 text-l md:my-0 my-7">
            <Link href={link.link} passHref>
              <a
                className={router.pathname === link.link ? "text-red-500" : ""}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}

        {/* dark and light with icons */}
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=" flex ml-3 mt-1  z-10 "
          >
            {theme === "light" ? (
              <FaMoon className="moon" size={20}></FaMoon>
            ) : (
              <FaSun className="sun" size={20}></FaSun>
            )}
          </button>
        </li>
      </ul>

      {/* burger button and cross button on mobile view */}

      <div onClick={handleNav} className=" flex md:hidden ">
        {nav ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20}></AiOutlineMenu>
        )}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] border-r border-r-gray-900 bg-gray-300 dark:bg-black h-auto ease-in-out duration-[3000ms] md:hidden"
            : "fixed right-[-100%] top-0  ease-in-out duration-[3000ms]"
        }
      >
        {/*1st nav bar  mobile menu list mapped */}
        <ul className="text-xs p-3 uppercase ">
          {sections.map((link) => (
            <li
              onClick={handleNav}
              key={link.name}
              className="p-4 border-b border-red-500"
            >
              <Link href={link.link} className="text-white-900 ">
                {link.name}
              </Link>
            </li>
          ))}
           <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=" flex ml-3 mt-1  z-10 "
          >
            {theme === "light" ? (
              <FaMoon className="moon" size={20}></FaMoon>
            ) : (
              <FaSun className="sun" size={20}></FaSun>
            )}
          </button>
        </li>
        </ul>

        {/* a close button on mobile menu itself */}
        <AiOutlineClose
          className="m-5"
          onClick={handleNav}
          size={20}
        ></AiOutlineClose>
      </div>
      
    </div>
  );
}
