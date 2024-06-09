import React from "react";
import Card2 from "../cardComponent/Card2";

const OurProcess = () => {
  const cardData = [
    {
      heading: "1. Planning",
      description:
        "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    },
    {
      heading: "2. Design",
      description:
        "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
      heading: "3. Development",
      description:
        "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      heading: "4. Marketing",
      description:
        "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6 ">
          <span className="text-customBlue">&#8212;</span> OUR PROCESS{" "}
          <span className="text-customBlue">&#8212;</span>
        </h2>
        <p className="text-center text-gray-600  mb-40">
          Over the years we’ve evolved a tested method for attaining achievement
          for each one of our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {cardData.map((data, index) => (
            <Card2
              key={index}
              heading={data.heading}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
