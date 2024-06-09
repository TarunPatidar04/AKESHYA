import React from "react";
import "remixicon/fonts/remixicon.css";
import count from "../assets/count.svg";
import smile from "../Icons/smile.png";
import clock from "../Icons/clock.png";
import world from "../Icons/world.png";
import diary from "../Icons/diary.png";
const AboutUs = () => {
  return (
    <div className="py-10  max-w-7xl mx-auto ">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black">
          <span className="text-customBlue">&#8212;</span>ABOUT US
          <span className="text-customBlue">&#8212;</span>
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
        <div className="w-[100%] mt-12 flex">
          <div className="w-[45%]">
            <img src={count} alt="this is Icons" />
          </div>
          <div className="w-[55%] mt-16 ml-5">
            <div className="">
              <div className=" flex space-x-28">
                <div className="flex space-x-2">
                  <img
                    src={smile}
                    alt="this is Icons"
                    className="w-9 h-9 filter  text-customBlue"
                  />
                  <p className="text-4xl font-bold font-sans -mt-1 ">
                    3835039
                    <p className="text-sm text-[#484848] mt-3">
                      Organic Reach (Global)
                    </p>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <img
                    src={diary}
                    alt="this is Icons"
                    className="w-9 h-9 filter  text-customBlue"
                  />
                  <p className="text-4xl font-bold font-sans -mt-1 ">
                    85
                    <p className="text-sm text-[#484848] mt-3">Campaigns</p>
                  </p>
                </div>
              </div>
              <div className="flex space-x-36 mt-10">
                <div className="flex space-x-2">
                  <img
                    src={clock}
                    alt="this is Icons"
                    className="w-9 h-9 filter  text-customBlue"
                  />
                  <p className="text-4xl font-bold font-sans -mt-1 ">
                    14081
                    <p className="text-sm text-[#484848] mt-3">
                      Watch Hours (Asia)
                    </p>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <img
                    src={world}
                    alt="this is Icons"
                    className="w-9 h-9 filter  text-customBlue"
                  />
                  <p className="text-4xl font-bold font-sans -mt-1 ">
                    17
                    <p className="text-sm text-[#484848] mt-3">
                      Excellent CTR % (Asia)
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
