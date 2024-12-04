import React from "react";
import { Careerrun } from "../assets"; // Ensure the correct path to your image asset
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  const handleConsultAstrologer = () => {
    navigate("/consult-astrologer", { state: { fromPage: "career" } });
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6 md:p-12">
      
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl">

        {/* Image Section */}
        <img
          src={Careerrun}
          alt="Career Icon"
          className="h-60 w-60 md:h-80 md:w-80 object-cover mb-6 md:mb-0 flex-shrink-0"
        />

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center md:text-left">
            Worry About <span className="text-orange-500">Career</span>?
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-center md:text-left max-w-3xl">
            Illuminate your career path with expert astrology guidance. Facing
            uncertainty? Our trusted astrologers provide personalized solutions,
            aligning your stars for success. Explore career forecasts, remedies,
            and insights tailored to your potential. Let Jyotish Aloy empower your
            ambitions and guide you toward a prosperous professional future.
          </p>
          <button
            onClick={handleConsultAstrologer}
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded hover:bg-lime-500 mt-8 text-sm md:text-base lg:text-lg"
          >
            Consult Astrologer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Career;
