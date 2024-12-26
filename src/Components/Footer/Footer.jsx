import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#94949456] text-black p-10 w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center py-4">Gadget Heaven</h2>
      <p className="text-xl text-center pb-6">
        Leading the way in cutting-edge technology and innovation.
      </p>

      <hr className="py-6" />
      <div className="flex items-center flex-col md:flex-row md:justify-between space-y-4">
        <nav className="flex justify-center items-center flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover"> Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex justify-center items-center flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex justify-center items-center flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Service policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
