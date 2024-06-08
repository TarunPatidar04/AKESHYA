// Main.jsx
import React from "react";
import home from "../assets/home.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-28 mt-32">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-customBlue">
              Grow your business with <br /> Akeshya
            </h1>
            <p className="text-2xl mt-3 text-[#484848]">
              We are team of talented website designers, developers <br /> &
              digital marketeers
            </p>
            <button className="mt-12 rounded-3xl py-2 px-8 border border-customBlue hover:text-white hover:bg-customBlue cursor-pointer">
              Get Started
            </button>
          </div>
          <div>
            <img src={home} alt="" className="animate-slowBounce" />
          </div>
        </div>
        <div className="mt-8 w-full">
          <section className="py-5 bg-[#F3F9FD]">
            <div className="mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 justify-center items-center gap-12 md:grid-cols-3 xl:grid-cols-none xl:flex xl:justify-between">
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client1}
                    alt="client1 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client2}
                    alt="client2 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client3}
                    alt="client3 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client4}
                    alt="client4 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client5}
                    alt="client5 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <img
                    src={client6}
                    alt="client6 img"
                    className="w-24 hover:filter-none filter grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
