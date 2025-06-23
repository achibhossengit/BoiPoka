import React, { useEffect, useState } from "react";
import {
  FaFilter,
  FaChevronDown,
  FaBook,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";
import { getStoredBooks } from "../../utilities/addToDB";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookCart from "../../components/Books/BookCart";

const ReadList = () => {
  const books = useLoaderData();
  const [readlist, setReadlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortType, setSortType] = useState("");
  useEffect(() => {
    const readIdlist = getStoredBooks('readlist');
    const wishIdlist = getStoredBooks('wishlist');
    const convertedReadIdList = readIdlist.map((id) => parseInt(id));
    const convertedWishIdList = wishIdlist.map((id) => parseInt(id));
    const readedBooks = books.filter((book) =>
      convertedReadIdList.includes(book.bookId)
    );
    const wishBooks = books.filter((book) =>
      convertedWishIdList.includes(book.bookId)
    );
    setReadlist(readedBooks);
    setWishlist(wishBooks);
  }, []);

  const handleSort = (type) => {
    setSortType(type);

    if (type === "page") {
      const sortedReadlist = [...readlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadlist(sortedReadlist);
      const sortedWishList = [...wishlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishlist(sortedWishList);
    }
    if (type === "rating") {
      const sortedReadlist = [...readlist].sort((a, b) => a.rating - b.rating);
      setReadlist(sortedReadlist);
      const sortedWishList = [...wishlist].sort((a, b) => a.rating - b.rating);
      setWishlist(sortedWishList);
    }
  };

  return (
    <div>
      <h1 className="rounded-lg py-5 text-center font-bold text-2xl bg-base-200 mb-5">
        Books
      </h1>

      <div className="flex justify-center mb-10">
        <div className="dropdown dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-primary bg-green-600 hover:bg-green-700 border-none px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <FaFilter className="text-lg" />
            Sort By
            <FaChevronDown className="text-sm ml-1 transition-transform duration-200 group-focus-within:rotate-180" />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-52 mt-2 border border-gray-100 animate-fade-in"
          >
            <li onClick={() => handleSort("page")}>
              <a
                className={`${
                  sortType === "page" && "bg-green-100 text-green-600"
                }hover:bg-green-50 hover:text-green-600 active:bg-green-100 focus:bg-green-50 transition-colors duration-150 rounded-md`}
              >
                <FaBook className="text-gray-400" />
                Page
              </a>
            </li>
            <li onClick={() => handleSort("rating")}>
              <a
                className={`${
                  sortType === "rating" && "bg-green-100 text-green-600"
                }hover:bg-green-50 hover:text-green-600 active:bg-green-100 focus:bg-green-50 transition-colors duration-150 rounded-md`}
              >
                <FaStar className="text-gray-400" />
                Rating
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readlist.map((book) => (
            <BookCart key={book.bookId} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          {wishlist.map((book) => (
            <BookCart key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
