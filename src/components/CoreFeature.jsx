import React from "react";
import Card3 from "../cardComponent/Card3";
import web from "../TechIcons/web.png";
import code from "../TechIcons/code.png";
import people from "../TechIcons/people.png";
import play from "../TechIcons/play.png";
import contact from "../TechIcons/contact.png";
import search from "../TechIcons/search.png";
import video from "../TechIcons/video.png";
import bullish from "../TechIcons/bullish.png";
import calendar from "../TechIcons/calendar.png";
import location from "../TechIcons/location.png";

const CoreFeature = () => {
  const cardData = [
    {
      name: "Web design",
      image: web,
    },
    {
      name: "Development",
      image: code,
    },
    {
      name: "Branding",
      image: people,
    },
    {
      name: "Media buying",
      image: play,
    },
    {
      name: "Search engine",
      image: search,
    },
    {
      name: "Brand strategy",
      image: bullish,
    },
    {
      name: "Local search marketing",
      image: calendar,
    },
    {
      name: "Lead Tracking & Management",
      image: location,
    },
    {
      name: "Contact management",
      image: contact,
    },
    {
      name: "Media management",
      image: video,
    },
    {
      name: "Social scheduling",
      image: contact,
    },
    {
      name: "Ad retargeting",
      image: web,
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6 ">
          <span className="text-customBlue">&#8212;</span>OUR CORE FEATURES
          <span className="text-customBlue">&#8212;</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Akeshya is a forward-thinking and intelligent design firm that is
          technically and creatively capable of transforming your brand into its
          best digital self. Our approach to design and development results in
          compelling, engaging branding and immersive digital experiences that
          provide a value for money.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cardData.map((data, index) => (
            <Card3 key={index} heading={data.name} image={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
