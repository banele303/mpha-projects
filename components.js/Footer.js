import React from "react";
import clsx from "clsx";

import { FcGoogle } from "react-icons/fc";
import {
  FaStar,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-hero md:p-[3rem] px-5 py-10 ">
      <hr className="pt-[2rem] text-gray opacity-20" />
      <div className="grid grid-cols-1 md:grid-cols-3 mx-[2rem]  px-[2rem] md:gap-24">
        <div className="py-[3rem] md:px-[2rem]">
          <h3 className="text-[19px] pb-[2rem]  text-white font-bold font-Poppins">
            About
          </h3>
          <span
              className={clsx(
                "bg-gradient-to-r from-blue-500 to-green-400  text-[19px] font-bold bg-clip-text align-middle    text-transparent"
              )}
            >
             
             SOUTHFLOW™
            </span>

          <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[14px] pb-[1rem]   opacity-90">
            Glenanda 47 Amand Road , South Africa
          </h3>
          <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px]  hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60 font-bold opacity-90">
            +27 068 445 8136
          </h3>

          <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[14px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
            alexsouthflow@gmail.com
          </h3>
        </div>

       

        {/* End */}
        <div className="py-[3rem]">
          <h3 className="text-[19px] pb-[1.8rem]  text-white font-bold font-Poppins">
         SOUTHFLOW
          </h3>

          <ul>
            <li>
              <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                About US
              </h3>
            </li>
            <li>
              <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
               Our Clients
              </h3>
            </li>
            <li>
              <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
             Home
              </h3>
            </li>
            <li>
              <h3 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
              Contact
              </h3>
            </li>
           
             
          </ul>
        </div>

        {/* End */}
        <div className="py-[3rem] ">
          <p className="text-[19px] pb-[1.8rem]  text-white font-bold font-Poppins">
            More On Us
          </p>
          <ul>
            <li className="flex flex-col">
              <div className="flex flex-row">
                <FcGoogle className="text-[40px]" />
                <p className="text-white leading-6 font-Poppins pt-[.7rem] pl-[10px] text-[13px] md:text-[13px]  transition-all cursor-pointer duratiion-60  opacity-90">
                  Reviews
                </p>
              </div>
              <div className="flex flex-row space-x-1 pl-[3rem]">
                <FaStar className="text-orange-400 text-[8px]" />
                <FaStar className="text-orange-400 text-[8px]" />
                <FaStar className="text-orange-400 text-[8px]" />
                <FaStar className="text-orange-400 text-[8px]" />
                <FaStar className="text-orange-400 text-[8px]" />
              </div>
            </li>
            <li>
              <p className="text-white leading-6 font-Poppins pt-[2rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Social Media
              </p>
            </li>
            <li>
              <div className="flex flex-row space-x-1 pl-[1rem] pt-[1.4rem]">
                <FaTwitterSquare className="rounded-md text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500" />
                <FaInstagramSquare className="text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500" />
                <FaLinkedin className="rounded-md text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500" />
                <FaFacebookSquare className="text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500" />
              </div>
            </li>
            <li>
              <p className="text-white leading-6 font-Poppins pt-[1.7rem] text-[15px] md:text-[16px]  hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60 font-bold opacity-90">
                +27 068 445 8136
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="pt-[1rem] text-gray opacity-20" />

      <h4 className="text-white text-[13px] font-Poppins px-[2rem] md:pl-[6rem]">
        © 2022 — Design By
        <p className="text-white font-Poppins text-[15px] md:text-[18px] font-extrabold">
          South<span className="text-[#56E3E7]">Flow</span>
        </p>
        . All Rights Reserved.
      </h4>
    </div>
  );
};

export default Footer;