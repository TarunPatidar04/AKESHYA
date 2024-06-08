import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 w-full bg-white z-10 ">
      <nav className="flex justify-between px-6 lg:px-28 py-5 items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="w-16" />
          <span className="ml-2 mt-3 text-3xl text-customBlue font-bold">
            AKESHYA
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            <li className="text-customBlue  cursor-pointer">
              Home
            </li>
            <li className=" cursor-pointer">About</li>
            <li className=" cursor-pointer">Services</li>
            <li>
              <button className="bg-customBlue hover:bg-[#7889f6] text-white py-2 px-4 lg:px-6 rounded-3xl">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
