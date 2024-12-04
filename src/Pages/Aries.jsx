import React from "react";

const Aries = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-indigo-700 via-purple-800 to-black text-white min-h-screen p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Today's Horoscope for Aries</h1>

      {/* Summary */}
      <div className="bg-white/20 rounded-lg p-4 max-w-md mb-6 text-center">
        <p>
          A dynamic day ahead, Aries ! Expect the unexpected, as the stars
          align to bring a multitude of opportunities and exciting encounters...
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Career & Finance */}
        <div className="flex-1 bg-white/20 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Career & Finance</h2>
          <ul className="list-disc list-inside">
            <li>A sudden business proposal sparks enthusiasm.</li>
            <li>Take bold steps, but ensure financial caution.</li>
          </ul>
        </div>

        {/* Love & Relationships */}
        <div className="flex-1 bg-white/20 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Love & Relationships</h2>
          <ul className="list-disc list-inside">
            <li>Singles, a chance meeting could lead to romance.</li>
            <li>Couples, open communication strengthens bonds.</li>
          </ul>
        </div>
      </div>

      {/* Extras */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="bg-white/20 rounded-full w-32 h-32 flex items-center justify-center">
          <p className="text-center">Lucky Numbers: <br /> 3, 9, 15</p>
        </div>
        <div className="bg-white/20 rounded-full w-32 h-32 flex items-center justify-center">
          <p className="text-center">Lucky Colors: <br /> Orange</p>
        </div>
        <div className="bg-white/20 rounded-full w-32 h-32 flex items-center justify-center">
          <p className="text-center">Astrological Tip: <br /> Focus on self-reflection</p>
        </div>
      </div>
    </div>
  );
};

export default Aries;
