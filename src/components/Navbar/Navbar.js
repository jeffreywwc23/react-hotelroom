import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaHotel } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <FaHotel className="menu-icon-hotel" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="menu-icon-times" />
          ) : (
            <FaBars className="menu-icon-bars" />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rooms" className="nav-links" onClick={closeMobileMenu}>
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links navbtn"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-in"
              className="nav-links navbtn"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
