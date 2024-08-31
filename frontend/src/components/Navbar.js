// src/components/Navbar.js
import React from "react";
import Logo from '../logo.png';
import "./Navbar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  return (
    <div className="header bg-blue-950">
      <nav className="navbar">
        <div className="logo"><img src={Logo} className="h-8" alt="Logo"/></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/messages">Messages</Link></li>
        </ul>
        <span className="flex justify-center text-white">
          <span className="py-2 hover:bg-green-200 hover:bg-opacity-15 rounded-md">
            <img src={Logo} className="h-8 rounded-s-full" alt="Logo"/>
          </span>
          <span className="px-2 py-2 mt-1">
            <ul className="nav-links">
              <li><Link to="/profile">Your Profile</Link></li>
            </ul>
          </span>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
