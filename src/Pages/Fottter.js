import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 bg-orange-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-white">
          © 2024{" "}
            Aktu-Quantum
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <NavLink to="./home" className="me-4 md:me-6">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./about" className="me-4 md:me-6">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="./contact" className="me-4 md:me-6">
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink to="./privacy" className="me-4 md:me-6">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="./disclaimer" className="me-4 md:me-6">
              Disclaimer
            </NavLink>
          </li>
          {/* Social Media Links */}
          <li>
            <a
              href="https://twitter.com/MuditRajput_"
              className="me-4 md:me-6"
              title="Twitter"
            >
              <FaTwitter className="text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/react.build__/"
              className="me-4 md:me-6"
              title="Instagram"
            >
              <FaInstagram className="text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mudit-rajput/"
              className="me-4 md:me-6"
              title="LinkedIn"
            >
              <FaLinkedin className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
