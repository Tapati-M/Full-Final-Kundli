import React from "react";
import {
  Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces, Weekly, Monthly, Yearly } from "../assets"; // Ensure all paths are correct

const Horoscope = () => {
  const zodiacSigns = [
    { name: "Aries", img: Aries },
    { name: "Taurus", img: Taurus },
    { name: "Gemini", img: Gemini },
    { name: "Cancer", img: Cancer },
    { name: "Leo", img: Leo },
    { name: "Virgo", img: Virgo },
    { name: "Libra", img: Libra },
    { name: "Scorpio", img: Scorpio },
    { name: "Sagittarius", img: Sagittarius },
    { name: "Capricorn", img: Capricorn },
    { name: "Aquarius", img: Aquarius },
    { name: "Pisces", img: Pisces },
  ];

  const handleNavigation = (page) => {
    window.location.href = `/${page}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Page Header */}
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
          HOROSCOPE
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Select One Zodiac Sign
        </p>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-gray-100 p-4 rounded-lg shadow-md">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(sign.name.toLowerCase())}
              className="cursor-pointer hover:scale-105 transition-transform text-center"
            >
              <img
                src={sign.img}
                alt={sign.name}
                className="w-full sm:h-32 object-cover rounded-lg shadow-sm"
              />
              <p className="mt-2 text-lg font-bold text-gray-700">{sign.name}</p>
            </div>
          ))}
        </div>

        {/* Horoscope Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <img
            src={Weekly}
            alt="Weekly Horoscope"
            onClick={() => handleNavigation("weekly")}
            className="cursor-pointer w-36 md:w-40 lg:w-44 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={Monthly}
            alt="Monthly Horoscope"
            onClick={() => handleNavigation("monthly")}
            className="cursor-pointer w-36 md:w-40 lg:w-44 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={Yearly}
            alt="Yearly Horoscope"
            onClick={() => handleNavigation("yearly")}
            className="cursor-pointer w-36 md:w-40 lg:w-44 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </main>
    </div>
  );
};

export default Horoscope;
