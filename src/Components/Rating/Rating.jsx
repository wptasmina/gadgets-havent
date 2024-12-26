import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { toast } from "react-toastify";

const Rating = ({ maxStar }) => {
  const [rating, setRating] = useState(0);
  const handleClickStar = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <div className="flex">
        {[...Array(maxStar)].map((_, index) => {
          return (
            <span
              key={index + 1}
              onClick={() => handleClickStar(index + 1)}
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: index + 1 <= rating ? "gold" : "gray",
              }}
            >
              <CiStar></CiStar>
            </span>
          );
        })}
        <p className="ml-5 bg-slate-300 flex items-center rounded-full px-3">
          {rating}
        </p>
      </div>
    </div>
  );
};

export default Rating;
