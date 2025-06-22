import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-green-50 to-gray-50 p-6 md:p-10 rounded-lg border border-gray-200">
      <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Books to freshen up your bookshelf
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          Discover our curated collection of bestsellers, new releases, and
          timeless classics.
        </p>
        <button className="px-6 py-3 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
          View The List
        </button>
      </div>
      <div className="relative">
        <img
          className="w-48 md:w-64 rounded-lg shadow-xl transform -skew-x-3 hover:scale-105 transition-transform"
          src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
          alt="Featured book"
        />
      </div>
    </div>
  );
};

export default Banner;
