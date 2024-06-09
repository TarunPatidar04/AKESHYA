import React from "react";

const Card2 = ({ heading, description }) => {
  return (
    <div className="relative shadow-lg rounded-xl overflow-hidden mb-20 bg-gray-100 hover:bg-customBlue hover:text-white">
      <div className=" inset-0 bg-gray-100 blur"></div>
      <div className="p-5 leading-6 relative ">
        <p className="text-center font-bold text-xl">{heading}</p>
        <p className="">{description}</p>
      </div>
      <div className="shadow-2xl absolute bg-gray-200"></div>
    </div>
  );
};

export default Card2;
