import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-2xl shadow-black  px-6 ">
      <div className="flex justify-between  lg:px-28 py-7 items-center shadow-lg backdrop-blur  bg-white">
        <div className="flex items-center">
          <span className="ml-2 mt-0 text-[#222222]">
            © Copyright Akeshya. All Rights Reserved
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            <li className="text-customBlue cursor-pointer text-sm">
              Terms and conditions
            </li>
            <li className="cursor-pointer text-customBlue text-sm">Refund policy</li>
            <li className="cursor-pointer text-customBlue text-sm">Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
