import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OurProcess from "./components/OurProcess";
import CoreFeature from "./components/CoreFeature";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <AboutUs />
      <Services />
      <OurProcess/>
      <CoreFeature/>
      <ContactUs/>
    </>
  );
};

export default App;
