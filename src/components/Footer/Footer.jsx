import React from "react";
import {
  FaBook,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdContactMail, MdPrivacyTip, MdLocalLibrary } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Footer = () => {
  // Navigation links data
  const quickLinks = [
    { name: "Browse Books", path: "/books", icon: <FaBook className="mr-2" /> },
    {
      name: "New Arrivals",
      path: "/new-arrivals",
      icon: <MdLocalLibrary className="mr-2" />,
    },
    {
      name: "Bestsellers",
      path: "/bestsellers",
      icon: <FaBook className="mr-2" />,
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <MdContactMail className="mr-2" />,
    },
    {
      name: "Customer Support",
      path: "/support",
      icon: <RiCustomerService2Fill className="mr-2" />,
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      path: "/privacy",
      icon: <MdPrivacyTip className="mr-2" />,
    },
    {
      name: "Terms of Service",
      path: "/terms",
      icon: <FaBook className="mr-2" />,
    },
    {
      name: "Shipping Policy",
      path: "/shipping",
      icon: <FaBook className="mr-2" />,
    },
    {
      name: "Return Policy",
      path: "/returns",
      icon: <FaBook className="mr-2" />,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      path: "https://facebook.com/boipoka",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/boipoka",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      path: "https://instagram.com/boipoka",
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      path: "https://linkedin.com/company/boipoka",
      icon: <FaLinkedin />,
    },
  ];

  const contactInfo = {
    email: "support@boipoka.com",
    phone: "+880 1234 567890",
    address: "123 Book Street, Dhaka, Bangladesh",
  };

  return (
    <footer className="mt-20">
      {/* upper section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-gray-200 py-10">
        {/* Brand/Logo Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <FaBook className="w-8 h-8 text-green-500" />
            <span className="ml-2 text-2xl font-bold">BoiPoka</span>
          </div>
          <p className="text-gray-400">
            Your favorite online bookstore in Bangladesh. Discover thousands of
            books at your fingertips.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors text-xl"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold">Quick Links</h6>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold">Policies</h6>
          <div className="space-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h6 className="text-lg font-semibold">Contact Us</h6>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-start">
              <MdContactMail className="mt-1 mr-2 flex-shrink-0" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-start">
              <RiCustomerService2Fill className="mt-1 mr-2 flex-shrink-0" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-start">
              <MdLocalLibrary className="mt-1 mr-2 flex-shrink-0" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} BoiPoka. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/payment-methods"
            className="text-gray-500 hover:text-green-500 text-sm"
          >
            Payment Methods
          </a>
          <a href="/faq" className="text-gray-500 hover:text-green-500 text-sm">
            FAQ
          </a>
          <a
            href="/about"
            className="text-gray-500 hover:text-green-500 text-sm"
          >
            About BoiPoka
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
