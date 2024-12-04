import React from "react";
import { Love, Career, Education, Finance, Child, Marriage, Health, Front } from "../assets";
import { useNavigate } from "react-router-dom";

const KundliNavbar = () => {
  const categories = [
    { name: "Love", icon: Love, route: "love" },
    { name: "Marriage", icon: Marriage, route: "marriage" },
    { name: "Career", icon: Career, route: "career" },
    { name: "Finance", icon: Finance, route: "finance" },
    { name: "Health", icon: Health, route: "health" },
    { name: "Education", icon: Education, route: "education" },
    { name: "Child", icon: Child, route: "child" },
  ];

  const navigate = useNavigate();

  return (
    <div>
      {/* Header Section */}
      <div className="m-8 py-8">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">KUNDLI MATCHING</h2>

          {/* Category Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => {
                  console.log(`Navigating to ${category.route}`);
                  navigate(category.route);
                }}
                className="flex flex-col items-center space-y-2 text-center cursor-pointer hover:shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 bg-white"
              >
                <img
                  src={category.icon}
                  alt={`${category.name} Icon`}
                  className="h-16 w-16 md:h-20 md:w-20"
                />
                <span className="text-sm md:text-lg font-semibold text-gray-700">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto text-center px-4">
          <img
            className="w-full max-w-4xl mx-auto mb-6"
            src={Front}
            alt="Kundli-Pic"
          />
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-left md:text-center">
            In the Indian Vedic Astrology system, a kundli refers to the
            astrological birth chart created based on the planetary positions
            at the exact time and place of someone’s birth. It essentially
            provides a visual representation and analysis of the cosmic
            influences affecting an individual. For marriage purposes, the
            kundalini of the prospective bride and groom are matched against
            each other to determine areas of compatibility and points where the
            couple may face issues. The higher the matching points, called gun
            milan score, the better the match is considered for marriage.
          </p>
          <button
            onClick={() => navigate("/match")}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-600 text-sm sm:text-base md:text-lg transition"
          >
            MATCH KUNDLI
          </button>
        </div>
      </div>
    </div>
  );
};

export default KundliNavbar;
