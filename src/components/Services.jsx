import React from "react";
import earth from "../Icons/earth.png";
import script from "../Icons/script.png";
import world from "../Icons/world.png";
import speed from "../Icons/speed.png";
import Card from "../cardComponent/Card";

const Services = () => {
  const cardData = [
    {
      heading: "Design",
      description:
        "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
      image: world,
    },
    {
      heading: "Development",
      description:
        "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
      image: script,
    },
    {
      heading: "Marketing",
      description:
        "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
      image: earth,
    },
    {
      heading: "Support",
      description:
        "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
      image: speed,
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          <span className="text-customBlue">&#8212;</span> SERVICES{" "}
          <span className="text-customBlue">&#8212;</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((data, index) => (
            <Card
              key={index}
              heading={data.heading}
              description={data.description}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
