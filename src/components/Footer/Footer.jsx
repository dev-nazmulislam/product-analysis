import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";

import { ImFacebook, ImLocation2 } from "react-icons/im";
import { AiOutlineTwitter, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12">
        <div>
          <Link
            to="/"
            className="font-bold text-3xl text-gray-600 hover:text-[#0991B1]"
          >
            Smart tech
          </Link>
          <p className="flex items-center font-medium gap-2 pt-2">
            <ImLocation2 />
            Level-4, 34, Awal Centre, Banani, Dhaka
          </p>
          <p className="flex items-center font-medium gap-2 pt-2">
            <CgMail />
            Official: web@programming-hero.com
          </p>
          <p className="flex items-center font-medium gap-2 pt-2">
            <IoMdCall />
            Helpline : 01322810873 , 01322810869
          </p>
          <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
        </div>
        <div className="text-center">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/review">Review</CustomLink>
          <CustomLink to="/deshboard">Deshboard</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <div className=" flex mx-auto items-center justify-center gap-2 mt-4">
            <a href="https://github.com/dev-nazmulislam">
              <ImFacebook className="text-2xl text-gray-600 hover:text-[#0991B1] transition-colors duration-200" />
            </a>
            <a href="https://github.com/dev-nazmulislam">
              <AiOutlineTwitter className="text-2xl text-gray-600 hover:text-[#0991B1] transition-colors duration-200" />
            </a>
            <a href="https://github.com/dev-nazmulislam">
              <AiFillGithub className="text-2xl text-gray-600 hover:text-[#0991B1] transition-colors duration-200" />
            </a>
            <a href="https://github.com/dev-nazmulislam">
              <FaLinkedinIn className="text-2xl text-gray-600 hover:text-[#0991B1] transition-colors duration-200" />
            </a>
            <a href="https://github.com/dev-nazmulislam">
              <AiFillYoutube className="text-2xl text-gray-600 hover:text-[#0991B1] transition-colors duration-200" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto">
        <div className="text-center text-blue-700 pt-12 font-normal flex items-center justify-center">
          All Rights Reserved By &copy; Smart Tech 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
