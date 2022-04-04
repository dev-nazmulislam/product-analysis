import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import "./Comment.css";

const Comment = ({ review }) => {
  const { name, img, time, description } = review;
  return (
    <div className="flex rounded-2xl bg-white my-5 p-4 ">
      <img className="comment-img" src={img} alt="" />
      <div>
        <span className="text-xl font-bold ">{name}</span> <span>({time})</span>
        <p>
          {
            <span className="flex my-4">
              <StarIcon className="w-6 text-orange-400"></StarIcon>
              <StarIcon className="w-6 text-orange-400"></StarIcon>
              <StarIcon className="w-6 text-orange-400"></StarIcon>
              <StarIcon className="w-6 text-orange-400"></StarIcon>
              <StarIcon className="w-6 text-orange-400"></StarIcon>
            </span>
          }
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Comment;
