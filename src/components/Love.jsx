import React from "react";
import { Problem } from "../assets"; 
import { useNavigate } from "react-router-dom";

const Love = () => {
  const navigate = useNavigate();

  // Handler for navigating to the Consult Astrologer page with state
  const handleConsultAstrologer = () => {
    navigate("/consult-astrologer", { state: { fromPage: "love" } });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-8 lg:p-16">

      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-4xl font-bold">
          Solve <span className="text-red-600">Love Problem</span> Just One{" "}
          <span className="text-blue-500">Click</span>
        </h1>
        <p className="text-gray-600 my-4">
          Consult your problem with our best astrologers
        </p>
        <button
          onClick={handleConsultAstrologer} 
          className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-500"
        >
          Consult Astrologer
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <img
          src={Problem} 
          alt="Solve Love Problem"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Love;