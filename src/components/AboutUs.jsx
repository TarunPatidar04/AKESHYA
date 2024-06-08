import React from "react";
import "remixicon/fonts/remixicon.css";

const AboutUs = () => {
  return (
    <div className="py-10  max-w-7xl mx-auto ">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center text-black">
          <span className="text-customBlue">&#9135;</span>ABOUT US
          <span className="text-customBlue">&#9135;</span>{" "}
        </h2>
        <div className="flex mt-10 w-[100%] text-[#444444]">
          <div className="space-y-4  w-[50%]">
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <div className="flex">
              <i className="ri-check-double-line text-customBlue pr-3"></i>
              <p>
                We started with a simple idea: do what is best for the client.
              </p>
            </div>
            <div className="flex">
              <i className="ri-check-double-line text-customBlue pr-3"></i>
              <p>
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </p>
            </div>
            <div className="flex">
              <i className="ri-check-double-line text-customBlue pr-3"></i>
              <p>
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.
              </p>
            </div>
          </div>
          <div className=" w-[50%]">
            <p>
              We're professional, but we're also friendly, and we'll always pay
              attention to your concerns. We expect to work with innovative
              people that have an open mind and are dedicated to making every
              idea a reality. We want to hear from you if you're interested in
              SEO, have Web Development ideas, or require a graphic designer who
              can match your goals.
            </p>
            <button className="mt-12 rounded-3xl py-2 px-8 border border-customBlue hover:text-white hover:bg-customBlue cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
