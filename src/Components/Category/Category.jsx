import React from "react";
import { toast } from "react-toastify";

const Category = ({ category, handleCategory, handleActive, isActive }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleCategory(category);
          handleActive(category.category);
        }}
        className={`cursor-pointer w-full p-3 rounded-full flex justify-center items-center ${
          isActive ? "bg-[#8F36D8] text-white" : ""
        }`}
      >
        {category.category}
      </button>
    </div>
  );
};

export default Category;
