import React from "react";

const ContactUs = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6 ">
          <span className="text-customBlue">&#8212;</span>CONTACT US
          <span className="text-customBlue">&#8212;</span>
        </h2>
        <div className="grid grid-cols-3">
          <div>
            <h1>Akeshya</h1>
            <p>
              Designers, developers & marketeers capable of delivering solutions
              according to your needs,
            </p>
          </div>

          <div>
            <p>
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </p>
            <p>info@akeshya.com</p>
            <p>+91 94942 40922</p>
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
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
