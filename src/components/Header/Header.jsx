import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="sticky top-0 bg-white px-12 py-8 flex flex-col md:flex-row justify-center items-center md:justify-between header-container">
      <div>
        <Link to="/" className="font-bold text-3xl text-gray-600">
          Smart tech
        </Link>
      </div>
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden ">
        {open ? <XIcon></XIcon> : <MenuAlt3Icon></MenuAlt3Icon>}
      </div>
      <div
        className={`flex flex-col  md:flex-row text-xl gap-4 ${
          open ? "block" : "hidden"
        }`}
      >
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/review">Review</CustomLink>
        <CustomLink to="/deshboard">Deshboard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
