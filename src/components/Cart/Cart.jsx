import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import "./Cart.css";

const Cart = ({ review }) => {
  const { name, img, ratting, time, description } = review;
  return (
    <div className="shadow-lg rounded-2xl bg-white p-4 ">
      <img className="card-img" src={img} alt="" />
      <h1 className="text-xl font-bold text-center">{name}</h1>
      <h3 className="text-center">{time}</h3>
      <p>
        {
          <span className="flex justify-center my-4">
            <StarIcon className="w-8 text-orange-400"></StarIcon>
            <StarIcon className="w-8 text-orange-400"></StarIcon>
            <StarIcon className="w-8 text-orange-400"></StarIcon>
            <StarIcon className="w-8 text-orange-400"></StarIcon>
            <StarIcon className="w-8 text-orange-400"></StarIcon>
          </span>
        }
      </p>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Cart;
