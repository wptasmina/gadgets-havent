import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "../Rating/Rating";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { useDashboardContext } from "../DashboardContext/DashboardContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state || {};

  const { addToWishlist, addToCart } = useDashboardContext();
  const { handleTotalCartList, handleTotalWishlist } = useDashboardContext();
  const [isInWish, setIsInWish] = useState(true);
  const [isInCart, setIsInCart] = useState(true);

  if (!product || !product.items) {
    return <div className="text-4xl">Loding..</div>;
  }

  // return (
  //   <div>
  //     {product.items.map(item => (
  //       <div key={item.id}>{item.name}</div>
  //     ))}
  //   </div>

  const handleAddToCart = () => {
    addToCart(product);

    setIsInCart(false);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);

    setIsInWish(false);
  };

  return (
    <div>
      <div className="relative bg-[#9538E2] py-8 mb-[560px]">
        <h2 className="text-4xl text-white font-bold mb-4 text-center">
          Product Details
        </h2>
        <p className="w-1/2 text-white text-center mx-auto mb-20">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="absolute top-[60%] left-[8%] w-10/12 mx-auto my-5 justify-between items-center rounded-lg bg-base-100 shadow-lg flex p-8">
          <div className="w-full">
            <img
              className="w-[424px] rounded-md"
              src={product.product.product_image}
            />
          </div>
          <div className="w-full">
            <h3 className="font-bold mb-3 text-2xl">
              {product.product.product_title}
            </h3>
            <p className="font-bold mb-3">Price: ${product.product.price}</p>
            <span className="border-2 p-2 mb-3 border-green-300 text-green-300 bg-green-50 rounded-2xl">
              In Stock
            </span>
            <p className="my-3 ">{product.product.description}</p>
            <p className="text-xl font-bold">Specification</p>
            <ol className="list-decimal">
              {product.product.specification.map((specific, idx) => (
                <li key={idx} className="ml-5">
                  {specific}
                </li>
              ))}
            </ol>
            <p className="font-bold">Rating</p>
            <Rating maxStar={5}></Rating>
            <div className="flex items-center my-5 gap-4">
              <button
                onClick={() => {
                  if (isInCart) {
                    handleAddToCart();
                  }
                  handleTotalCartList();
                }}
                className={`flex items-center rounded-full bg-[#8C35D4] p-2 gap-2 text-white ${
                  isInCart ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              >
                Add to Cart
                <FiShoppingCart className="text-3xl cursor-pointer p-1 rounded-2xl flex items-center justify-center"></FiShoppingCart>
              </button>
              <div
                className={`bg-slate-100 text-black rounded-full flex items-center justify-center ${
                  isInWish ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              >
                <FaRegHeart
                  onClick={() => {
                    if (isInWish) {
                      handleAddToWishlist();
                    }
                    handleTotalWishlist();
                  }}
                  className="text-3xl m-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
