import React from "react";
import pointer from "../TechIcons/pointer.png";
import message from "../TechIcons/message.png";
import calling from "../TechIcons/calling.png";

const ContactUs = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-9 ">
          <span className="text-customBlue">&#8212;</span>CONTACT US
          <span className="text-customBlue">&#8212;</span>
        </h2>
        <div className="grid grid-cols-3">
          <div>
            <h1 className="text-customBlue font-bold text-2xl">Akeshya</h1>
            <p className="text-[#888888] text-sm">
              Designers, developers & marketeers capable of delivering solutions
              according to your needs,
            </p>
          </div>

          <div className=" font-sans text-sm ">
            <p className="flex mb-5">
              <img src={pointer} alt="" className="w-6 h-6 " />
              <span className="ml-4 text-[#444444] space-y-6">
                26-2-789, 7th street, Jyothi Nagar, <br /> Nellore, Andhra
                Pradesh 524004
              </span>
            </p>
            <p className="flex mb-5">
              <img src={message} alt="" className="w-6 h-6" />
              <span className="ml-4"> info@akeshya.com</span>
            </p>
            <p className="flex">
              <img src={calling} alt="" className="w-6 h-6" />
              <span className="ml-4">+91 94942 40922</span>
            </p>
          </div>
          <div className="">
            <form action="">
              <div className="mb-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Name"
                  className="w-full border-2 p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Email"
                  className="w-full border-2 p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject"
                  className="w-full border-2 p-2"
                />
              </div>
              <div className="mb-4 ">
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="Message"
                  className="w-full border-2 p-3 h-28"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="border-2 py-3 px-7 rounded-full bg-customBlue text-white">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
