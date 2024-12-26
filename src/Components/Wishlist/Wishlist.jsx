import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDashboardContext } from "../DashboardContext/DashboardContext";
const wishlist = ({ wishItems }) => {
  const { handleRemoveFromWishlist } = useDashboardContext();
  return (
    <div>
      <div className="flex my-5 justify-between">
        <h2 className="font-bold text-2xl">Wishlist</h2>
      </div>
      <div>
        {wishItems.map((item) => (
          <div className="shadow-xl rounded-lg my-10 grid grid-cols-12 items-center  py-10">
            <div className="w-[200px] h-[124px] rounded-lg col-span-4 flex justify-center items-center mx-auto">
              <img
                className="h-full w-full rounded-lg"
                src={item.product.product_image}
                alt=""
              />
            </div>
            <div className="col-span-6">
              <h2 className="font-bold mb-3 text-3xl">
                {item.product.product_title}
              </h2>
              <p className="mb-3">{item.product.description}</p>
              <p className="font-bold">Price : ${item.product.price}</p>
              <button className="bg-[#8B35D3] rounded-full px-8 py-2 my-3 text-white">
                Add to Card
              </button>
            </div>
            <div className="text-red-400 text-4xl col-span-2 flex justify-center items-center">
              <RxCross2
                onClick={() =>
                  handleRemoveFromWishlist(item.product.product_id)
                }
                className="cursor-pointer"
              ></RxCross2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default wishlist;
