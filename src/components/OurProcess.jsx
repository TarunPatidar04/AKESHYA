import React from "react";
import Card2 from "../cardComponent/Card2";
import { motion } from "framer-motion";

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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-black mb-6 ">
            <span className="text-customBlue">&#8212;</span> OUR PROCESS{" "}
            <span className="text-customBlue">&#8212;</span>
          </h2>
          <p className="text-center text-gray-600  mb-40">
            Over the years we’ve evolved a tested method for attaining achievement
            for each one of our clients.
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
                staggerChildren: 0.3,
              },
            },
            hidden: { opacity: 0, y: 100 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
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
              <Card2
                heading={data.heading}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurProcess;
