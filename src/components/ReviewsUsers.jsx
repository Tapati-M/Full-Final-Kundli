import React from "react";
import { Review1, Review2, Review3 } from "../assets";

const reviews = [
  {
    name: "Anirban Chatterjee",
    image: Review1, 
    review: `“This app helped me to get a job in my dream company. I was stressed about not getting a career opportunity after my graduation. One prediction from an astrologer gave me a ray of hope and within a few months, I had a job offer in hand. Thank you so much Jyotish Aloy for helping me out - (5/5 stars)”`,
  },
  {
    name: "Tapati Mondal",
    image: Review2, 
    review: `“I highly recommend Jyotish Aloy! Their accurate birth chart analysis and daily horoscopes have helped me navigate life’s challenges. The modern design and intuitive interface make it easy to use. - (5/5 stars)”`,
  },
  {
    name: "Ishan Mitra",
    image: Review3, 
    review: `“Jyotish Aloy is a revelation! The love compatibility tool and community forum are invaluable resources. Expert astrologers genuinely care, and the site’s security measures reassure. Jyotish Aloy improved my self-awareness and relationships – I’ve already recommended it! - (5/5 stars)”`,
  },
];

const ReviewsUsers = () => {
  return (
    <div className="bg-gray-50 py-12">

      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800">REVIEWS</h2>
        <p className="text-gray-600 mt-2">Reviews by our Customers</p>
      </div>

      {/* Cards Container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-4 bg-yellow-400">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 px-2 py-0 rounded-sm text-center"
            >
              <div className="bg-gray-400 rounded-2xl px-6 max-w-xs text-center border h-96 border-gray-200">
                
                {/* Image Section */}
                <div
                  className="relative mx-auto w-24 h-24 mb-4"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    style={{
                      clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                    className="object-cover w-[95%] h-[95%] bg-white mx-auto mt-4"
                  />
                </div>

                {/* Name Section */}
                <div className="bg-yellow-500 text-gray-800 font-semibold text-lg rounded-t-lg px-4 py-1 mb-4">
                  {review.name}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsUsers;
