import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Blog = () => {
  return (
    <div className="flex">
      <div className="w-32 h-screen px-4">
        <CustomLink to="/blogs/quizOne">Question-1</CustomLink>
        <CustomLink to="/blogs/quizTwo">Question-2</CustomLink>
        <CustomLink to="/blogs/quizThree">Question-3</CustomLink>
      </div>
      <div className="grow  border-l-2 mx-12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
