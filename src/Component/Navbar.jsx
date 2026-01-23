import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <nav>
      <div className="navbar-logo">
        <h2>My Website</h2>
      </div>
      <ul className="navbar-links">
         <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </ul>
       <div className="nav-actions">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        {isLoggedIn && (<ProfileDropdown />)}
      </div>

    </nav>
  );
}