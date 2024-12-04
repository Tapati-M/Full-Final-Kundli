import React from "react";
import { Design } from "../assets";
const ReviewCard = () => {
  return (
 <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
  <h1 className="text-6xl font-bold font-serif">
        Jotish Aloy <span className="text-red-600">Reviews</span>
      </h1>
      <h2 className="text-1xl font-title font-bold text-gray-800 mt-4 uppercase">
        Here about us from our customers
      </h2>

 {/* Decorative Divider */}
 <div className="my-2 flex items-center justify-center">
 <img src={Design} alt="decorative" className="w-full h-30 mb-8" />
</div>

{/* Testimonial Content */}
<div className="mt-6 text-left">
 <h2 className="text-lg font-bold text-gray-700">Client Testimonials</h2>
 <p className="mt-4 text-gray-600 leading-relaxed">
   Jotish Aloy, in India, is recognized as the best astrology website,
   dedicated to providing astrology consultation to astrology lovers
   from across the world. We help our customers interact with Vedic
   astrologers, Tarot readers, Numerologists, Palm readers, and experts
   in all other astrological fields. Our motive is to provide people
   with the most genuine astrology services and thus are consistently
   open to recommendations. In fact, our Astrotalk reviews page helps us
   well understand the need of the customers and what they think about
   us and the astrologers on Jotish Aloy.
 </p>
</div>
</div>
);
};


export default ReviewCard;