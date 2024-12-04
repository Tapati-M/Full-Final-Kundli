import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get("http://localhost:5000/api/results");
      setResults(response.data);
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Kundli Matching Results</h1>

      {results.length > 0 ? (
        results.map((result, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Match {index + 1}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <p className="font-medium text-lg text-gray-700"><strong>Boy's Name:</strong> {result.boy.name}</p>
                <p className="font-medium text-lg text-gray-700"><strong>Boy's Birth Date:</strong> {result.boy.birthDate}</p>
                <p className="font-medium text-lg text-gray-700"><strong>Boy's Birth City:</strong> {result.boy.birthCity}</p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <p className="font-medium text-lg text-gray-700"><strong>Girl's Name:</strong> {result.girl.name}</p>
                <p className="font-medium text-lg text-gray-700"><strong>Girl's Birth Date:</strong> {result.girl.birthDate}</p>
                <p className="font-medium text-lg text-gray-700"><strong>Girl's Birth City:</strong> {result.girl.birthCity}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-xl text-indigo-500">
                Compatibility Score: <span className="text-green-600">{result.compatibilityScore}%</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-600">No results available.</p>
      )}
    </div>
  );
};

export default ResultPage;
