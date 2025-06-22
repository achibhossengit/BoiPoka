import React from "react";
import { FaBook, FaHome, FaBookOpen, FaList } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome className="mr-1" /> },
    { name: "Listed Books", path: "/books", icon: <FaList className="mr-1" /> },
    {
      name: "Pages to Read",
      path: "/reading-list",
      icon: <FaBookOpen className="mr-1" />,
    },
  ];

  return (
    <div className="navbar bg-white px-0 py-3 border-b border-gray-200 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-gray-700 hover:text-green-500"
                >
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="/" className="flex items-center text-xl font-bold">
          <FaBook className="text-green-500 mr-2" />
          <span className="text-gray-800">BoiPoka</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md px-3 py-2"
              >
                {link.icon} {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <button className="px-4 py-2 border cursor-pointer border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors">
          Sign In
        </button>
        <button className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
