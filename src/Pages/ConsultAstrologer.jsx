import React, { useState } from "react";
import AstrologerList from "../components/AstrologerList";
import AstrologerDetails from "../components/AstrologerDetails";
import AstrologersData from "../components/AstrologersData";
import ReviewCard from "../components/ReviewCard";
import ReviewsUsers from "../components/ReviewsUsers";

const ConsultAstrologer = () => {
  const [selectedAstrologer, setSelectedAstrologer] = useState(null);

  const handleAstrologerSelect = (id) => {
    const astrologer = AstrologersData.find((astro) => astro.id === id);
    setSelectedAstrologer(astrologer);
  };

  const handleBackToList = () => {
    setSelectedAstrologer(null);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
      {!selectedAstrologer ? (
        <AstrologerList onSelectAstrologer={handleAstrologerSelect} />
      ) : (
        <AstrologerDetails
          astrologer={selectedAstrologer}
          onBack={handleBackToList}
        />
      )}
      
    </div>
    <ReviewCard />
    <ReviewsUsers />
    </div>
  );
};

export default ConsultAstrologer;
