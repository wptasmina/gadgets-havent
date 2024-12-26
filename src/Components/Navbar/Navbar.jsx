import logo from "../../assets/logo.png"
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { useDashboardContext } from "../DashboardContext/DashboardContext";
// import { toast } from "react-toastify";

const Navbar = ({ isRootPage }) => {
  const { totalCart, totalWishlist } = useDashboardContext();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active text-lg rounded-md px-4 py-2 mr-4"
              : "text-black text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Statistics"
          className={({ isActive }) =>
            isActive
              ? "active text-lg rounded-md px-4 py-2 mx-4"
              : "text-black text-lg"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive
              ? "active text-lg rounded-md px-4 py-2 mx-4"
              : "text-black text-lg"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "active text-lg rounded-md px-4 py-2 ml-4"
              : "text-black text-lg"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar items-center ${
        isRootPage ? "bg-[#9538E2]" : "text-white"
      }`}
    >
      <div className="navbar-start p-0 py-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden rounded-full shadow-sm bg-[#9538E2] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#c995f3] rounded-box z-[1] mt-3 mx-4 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="Gadget Heaven Logo"
            className="w-28 h-10 object-cover md:ml-0 ml-1"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-4">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="flex items-center justify-center text-black bg-white rounded-full cursor-pointer relative">
          <FiShoppingCart className="text-3xl text-black p-2 w-12 h-12 border rounded-full hover:bg-slate-100 flex items-center justify-center"></FiShoppingCart>
          <span className=" absolute right-3 top-1 text-[10px] font-bold text-red-700">
            {totalCart}
          </span>
        </div>

        <div className="flex items-center justify-center text-black bg-white rounded-full cursor-pointer relative">
          <FaRegHeart className="text-3xl text-black p-2 w-12 h-12 border rounded-full hover:bg-slate-100 flex items-center justify-center"></FaRegHeart>
          <span className=" absolute right-3 top-1 text-[10px] font-bold text-red-700">
            {totalWishlist}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
