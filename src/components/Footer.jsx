import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      <div className="shadow-2xl shadow-black px-6">
        <div className="flex justify-between lg:px-28 py-7 items-center shadow-lg backdrop-blur bg-white">
          <div className="flex items-center">
            <span className="ml-2 mt-0 text-[#222222] text-sm">
              © Copyright <span className="font-bold">Akeshya</span>. All Rights Reserved
            </span>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center space-x-4 lg:space-x-6">
              <li className="text-customBlue cursor-pointer text-sm">
                Terms and conditions
              </li>
              <li className="cursor-pointer text-customBlue text-sm">Refund policy</li>
              <li className="cursor-pointer text-customBlue text-sm">Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-customBlue text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#7889f6] transition-all duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
