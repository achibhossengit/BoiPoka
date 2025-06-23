import React from "react";
import { FaStar, FaRegStar, FaBookOpen } from "react-icons/fa";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      {/* Book Cover */}
      <div className="flex items-center justify-center bg-gray-100 p-4 h-48">
        <img
          className="h-full object-contain rounded"
          src={image}
          alt={`Cover of ${bookName}`}
        />
      </div>

      {/* Book Details */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Author */}
        <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
          {bookName}
        </h2>
        <h4 className="text-sm text-gray-600 mb-3">By: {author}</h4>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between items-center">
            {/* Category */}
            <div className="flex items-center text-sm text-gray-700">
              <FaBookOpen className="mr-1 text-green-500" />
              {category}
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex mr-1">{renderStars(rating)}</div>
              <span className="text-sm font-medium text-gray-700">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Publisher and Year */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>{publisher}</span>
            <span>{yearOfPublishing}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
