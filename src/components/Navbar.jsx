import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-28 py-8 items-center bg-white">
        <h1 className="text-xl text-gray-800 font-bold flex">
          <img src={Logo} alt="" className="w-16" />{" "}
          <span className="mt-3 text-3xl text-[#14279b] ">AKESHYA</span>
        </h1>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="text-[#14279b]">Home</li>
            <li>About</li>
            <li>Services</li>
            <li>
              <button className="bg-[#14279b] hover:bg-[#7889f6] text-white py-2 px-4 rounded-3xl">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
