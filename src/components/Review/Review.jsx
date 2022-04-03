import React, { useContext } from "react";
import { ReviewContext } from "../../App";
import Cart from "../Cart/Cart";

const Review = () => {
  const [reviews] = useContext(ReviewContext);
  return (
    <div className="md:mx-20">
      <h1 className="text-5xl text-blue-500 py-8 text-center">
        Whats our Customar say!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 mb-12">
        {reviews.map((review) => (
          <Cart key={review.id} review={review}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Review;
