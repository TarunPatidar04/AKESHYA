import React from "react";
import Card3 from "../cardComponent/Card3";
import { motion } from "framer-motion";
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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
               duration: 1.5,
                delay: 0.8,
              },
            },
            hidden: { opacity: 0, y: 100 },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {cardData.map((data, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card3 heading={data.name} image={data.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CoreFeature;
