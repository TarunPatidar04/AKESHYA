import React from "react";

const Card3 = ({ heading, image }) => {
  return (
    <div className="border bg-gray-100 pl-3 pt-3 pb-5 w-[300px] flex space-x-3">
      <img src={image} alt="" className="w-8 h-8" />
      <div className="font-bold mt-1">{heading}</div>
    </div>
  );
};

export default Card3;
