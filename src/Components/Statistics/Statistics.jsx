import React from "react";
import { toast } from "react-toastify";

const Statistics = () => {
  return (
    <>
      <div className="bg-[#8F36D8] py-10"> 
        <h2 className="text-center text-3xl md:text-4xl text-white font-extrabold pb-4">
          Statistics
        </h2>
        <p className="text-center text-white md:w-1/3 mx-auto px-2">
          Explore the latest gadets that will take your experience to the next
          level. From smart devices to the coolest axxessories, ew ave it all!
        </p>
      </div>
      <div>
        <h4 className="text-2xl text-black pt-4 font-bold px-2">Statistics</h4>
        <h1 className="text-center md:text-6xl text-4xl text-[#8F36D8] font-extrabold pt-5 pb-10">
          No Data to Show Statistice
        </h1>
      </div>
    </>
  );
};

export default Statistics;
