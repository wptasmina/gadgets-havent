import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDashboardContext } from "../DashboardContext/DashboardContext";
import { useNavigate } from "react-router-dom";
import { RiSortDesc } from "react-icons/ri";
import detialsImg from "../../../src/assets/Group.png";
import { toast } from "react-toastify";
const Cart = () => {
  const { cartItems, handleRemoveFromCart, price, handleSort, resetCart } =
    useDashboardContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    if (price == 0) {
      toast.warning("you didn't choose any product!");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetCart();

    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className="flex my-5 justify-between">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center justify-between gap-5">
          <p className="font-bold text-xl">Total Cost: ${price}</p>
          <button
            onClick={() => handleSort()}
            className="text-[#9538E2] px-4 py-2 rounded-full border-[#9538E2] border-2 font-bold flex items-center gap-2"
          >
            Sort by Price
            <RiSortDesc className="text-3xl"></RiSortDesc>
          </button>
          <button
            onClick={handleOpenModal}
            className="font-bold text-white bg-[#9538E2] px-6 py-3 rounded-full border-[#9538E2] border-2"
          >
            Purchase
          </button>
        </div>
      </div>

      <div>
        {cartItems.map((item) => (
          <div className="shadow-xl rounded-lg my-10 grid grid-cols-12 items-center py-10">
            <div className="w-[200px] h-[124px] rounded-lg col-span-4 flex justify-center items-center mx-auto">
              <img
                className="h-full w-full rounded-lg"
                src={item.product.product_image}
                
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center ">
              <h2 className="font-bold mb-3 text-3xl">
                {item.product.product_title}
              </h2>
              <p className="mb-3">{item.product.description}</p>
              <p className="font-bold">Price: ${item.product.price}</p>
            </div>
            <div className="text-red-400 text-4xl col-span-2 flex justify-center items-center">
              <RxCross2
                onClick={() => handleRemoveFromCart(item.product.product_id)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-96 flex justify-center flex-col items-center">
            <img className="mb-3" src={detialsImg}/>
            <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>

            <div className="divider"></div>
            <p className="mb-4">Thanks for purchasing</p>
            <p className="font-bold mb-3">Total:$ {price}</p>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  handleCloseModal();
                }}
                className="px-4 py-2 bg-[#9538E2] text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
