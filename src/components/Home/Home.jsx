import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewContext } from "../../App";
import Cart from "../Cart/Cart";
import img from "../../assets/images/header.png";

const Home = () => {
  const [reviews] = useContext(ReviewContext);
  const navigate = useNavigate();

  return (
    <section className="md:mx-20">
      <header className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <h1 className="text-5xl text-blue-500 py-8">Best Laptop in 2022</h1>
          <h1 className="text-4xl">
            Gigabyte AERO 15 OLED KC Core i7 10th Gen
          </h1>
          <button
            onClick={() => navigate("/product-details")}
            className="bg-blue-500 py-2 px-3 rounded-lg text-white mt-8 font-bold"
          >
            Show Details
          </button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </header>
      <div>
        <h1 className="text-5xl text-center text-blue-500 py-8">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((review) => (
            <Cart key={review.id} review={review}></Cart>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/review")}
            className="bg-blue-500 py-2 px-3 rounded-lg text-white  font-bold my-12"
          >
            See All Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
