import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductDetails from "../ProductDetails/ProductDetails";
import Banner from "../Banner/Banner";



const Root = () => {
  const location = useLocation();
  const isRootPage = location.pathname === "/";
  const isDetailsPage = location.pathname.startsWith("/productDetails");
  useEffect(() => {
    const routeName = isRootPage ? "Home" : location.pathname.slice(1);
    document.title = `Gadgets | ${
      routeName.charAt(0).toUpperCase() + routeName.slice(1)
    }`;
  }, [location]);
  const heroClass = isRootPage ? "mb-[560px]" : "";
  return (
    <div>
      <ToastContainer position="top-center" autoClose={1000} />
      <div className="mt-8 w-11/12 mx-auto">
        <div
          className={`relative rounded-md ring-[7px] ring-[#F6F6F6]  text-white ${
            isRootPage ? "bg-[#9538E2]" : "text-black"
          }`}
        >
          <Navbar isRootPage={isRootPage}></Navbar>

          {isDetailsPage ? <Outlet /> : <Banner />}
          {isDetailsPage && <ProductDetails />}
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
