import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineBook,
  AiOutlineTags,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BiCategoryAlt, BiStar } from "react-icons/bi";

const BookCart = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-white border-1 rounded-lg border-gray-200 mb-2">
      {/* Book Cover */}
      <div className="flex justify-center items-center bg-gray-100 w-1/4 rounded-lg">
        <img
          src={image}
          alt={`Cover of ${bookName}`}
          className="rounded-lg w-1/2"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col w-3/4">
        {/* Book Name & Author */}
        <h1 className="text-xl font-semibold">{bookName}</h1>
        <p className="text-gray-600">By: {author}</p>

        {/* Tags and Publishing Details */}
        <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
          <h3 className="font-medium flex items-center">
            <AiOutlineTags className="mr-2" /> Tags:
          </h3>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
          <p className="ml-4 flex items-center text-gray-600">
            <AiOutlineCalendar className="mr-1" />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>

        {/* Publisher and Pages */}
        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
          <p className="flex items-center text-gray-600">
            <FiBookOpen className="mr-1" />
            Publisher: {publisher}
          </p>
          <p className="flex items-center text-gray-600">
            <AiOutlineBook className="mr-1" />
            Pages: {totalPages}
          </p>
        </div>

        {/* Category, Rating, and Button */}
        <div className="flex gap-5 items-center pt-2 mt-2 border-t border-gray-200">
          <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full flex items-center">
            <BiCategoryAlt className="mr-2" />
            Category: {category}
          </span>
          <span className="bg-yellow-100 text-yellow-500 px-3 py-1 rounded-full flex items-center">
            <BiStar className="mr-2" />
            Rating: {rating}
          </span>
          <button className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded-lg shadow-md hover:bg-green-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCart;
