import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // logout
      setShowDropdown(false); // hide profile dropdown
    }
    setIsLoggedIn(!isLoggedIn);
    navigate("/");
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">My Website</h2>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Profile Dropdown — ONLY when logged in */}
          {isLoggedIn && (
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="dropdown-btn">Profile ▾</button>

              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/activity">My Activity</Link></li>
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/admin/profile">View Profile</Link></li>
                </ul>
              )}
            </li>
          )}

          {/* Login / Logout */}
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <button
              className={`btn ${isLoggedIn ? "logout-btn" : "login-btn"}`}
              onClick={handleAuthClick}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
