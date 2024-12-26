import React, { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useDashboardContext } from "../DashboardContext/DashboardContext";
import { toast } from "react-toastify";
const Dashboard = () => {
  const { cartItems } = useDashboardContext();
  const { wishItems } = useDashboardContext();

  const [active, setActive] = useState("cart");
  return (
    <div id="buy-section">
      <div className="relative bg-[#9538E2]  py-8 ">
        <h2 className="text-4xl text-white font-bold mb-4 text-center ">
          Dashboard
        </h2>
        <p className="w-1/2 text-white text-center mx-auto mb-10">
          Explore the latest tech with our dashboard—featuring top smart
          devices, must-have accessories, and innovative gadgets to enhance your
          experience!
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActive("cart")}
            className={`rounded-full px-8 py-3 border-2 font-bold   ${
              active === "cart" ? "text-purple-600 bg-white " : "text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActive("wishlist")}
            className={`rounded-full px-8 py-3 border-2   font-bold  ${
              active === "wishlist" ? " bg-white text-purple-600" : "text-white"
            }`}
          >
            WishList
          </button>
        </div>
      </div>
      {/* dashboard card */}
      <div>
        {active === "wishlist" ? (
          <Wishlist wishItems={wishItems}></Wishlist>
        ) : (
          <Cart cartItems={cartItems}></Cart>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
