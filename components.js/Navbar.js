
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div>
        <div
          className={
            scrolled
              ? "scrolled w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[2rem] pb-[2rem]"
              : " w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[3rem] "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center pl-6 realtive  md:pl-[4rem]">
             
              <Image src="/assets/v2.svg" alt="logo" className="py-[1rem] absolute w-[2rem] h-[4rem]" width={50} height={50} />
              <h3 className="text-white font-Poppins text-[25px] md:text-[30px] font-extrabold">
                SOUTH<span
              className="text-[#56E3E7]">
                FLOW™
                </span>
                </h3>
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-white  font-bold">
                  <Link href="/">HOME</Link>
                </li>
               
                
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-white font-bold">
                  <Link href="/about-us">ABOUT US</Link>
                </li>
                <li className="md:ml-3 py-3 px-6  border-5 border-sky-900 cursor-pointer text-[19px] font-Poppins text-slate-200 font-bold">
                  <Link href="/clients ">CLIENTS</Link>
                </li>
              </ul>
              <button
                type="button"
                className={`py-2 px-6  mr-[2rem]  font-poppins   text-[16px]  md:text-[20px] border-none rounded-md  text-white   hover:scale-[1.1] transition-all duration-75 font-bold  font-Poppins`}
              >
                <Link href="/contact ">BOOK A CALL</Link>
              </button>
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
                <MenuIcon className="w-5 text-white" />
              ) : (
                <XIcon className="w-5 text-white" />
              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "scrolled absolute w-[250px] px-8 top-[5rem] right-[1rem] border-none rounded-md"
            }
          >
            <li className=" md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/">Home</Link>
            </li>
           
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
            <Link href="/about-us">About Us</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/clients">Client</Link>
            </li>

            <div className="flex flex-col my-4">
            <button
                type="button"
                className={`py-2 px-6  mr-[2rem]  hover:from-pink-500  font-poppins font-medium   text-[16px]  md:text-[20px] border-none rounded-md  text-white   hover:scale-[1.1] transition-all duration-75  font-Poppins`}
              >
                <Link href="/contact ">BOOK A CALL</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;