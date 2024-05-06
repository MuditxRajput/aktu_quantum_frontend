import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 bg-orange-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-white">
          © 2024 Aktu-Quantum. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li className="mb-3 md:mb-0">
            <NavLink to="/Free-AKTU-Quantum-PDFs-for-1st-Year-Students" className="me-4 md:me-6">
              post
            </NavLink>
          </li>
          <li className="mb-3 md:mb-0">
            <NavLink to="/about" className="me-4 md:me-6">
              About
            </NavLink>
          </li>
          <li className="mb-3 md:mb-0">
            <NavLink to="/contact" className="me-4 md:me-6">
              Contact us
            </NavLink>
          </li>
          <li className="mb-3 md:mb-0">
            <NavLink to="/privacy" className="me-4 md:me-6">
              Privacy Policy
            </NavLink>
          </li>
          <li className="mb-3 md:mb-0">
            <NavLink to="/disclaimer" className="me-4 md:me-6">
              Disclaimer
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center mt-3 text-white">
          <li className="me-4">
            <NavLink to="https://www.linkedin.com/in/mudit-rajput/">
              <FaLinkedin className="text-white" />
            </NavLink>
          </li>
          <li className="me-4">
            <NavLink to="https://www.instagram.com/react.build__/">
              <FaInstagram className="text-white" />
            </NavLink>
          </li>
          <li>
            <NavLink to="https://twitter.com/">
              <FaTwitter className="text-white" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
