import React from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex-items-center h-[3.5rem] -px-1
    bg-n-8/80 rounded-[1.7rem] ${className || ""}text-base`}
    >
      <img className="w-5 h-5 mr-10 ml-10" src={loading} alt="Loading" />
      <h1>Synergy Global</h1>
    </div>
  );
};

export default Generating;
