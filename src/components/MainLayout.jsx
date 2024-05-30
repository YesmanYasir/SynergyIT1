import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Header from "./Header";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Services from "./Services";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Services />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default MainLayout;
