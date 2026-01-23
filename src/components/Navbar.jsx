import { Link } from "react-router-dom";
import { useState} from "react";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // logout
      setShowDropdown(false); // hide profile dropdown
    }
    setIsLoggedIn(!isLoggedIn);
    // navigate("/");
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <nav className="flex items-center justify-between p-4 px-20 bg-blue-500 text-white">
      <div className="flex items-center w-full justify-between">
        <h2 className="logo">My Website</h2>

        <ul className="flex items-center gap-8 list-none relative">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>

          {/* Profile Dropdown — ONLY when logged in */}
          {isLoggedIn && (
            <li
              className="dropdown"
                onClick={handleDropdownClick}
            >
              <button className="cursor-pointer font-bold">Profile ▾</button>

              {showDropdown && (
                <ul className="absolute flex flex-col top-full left-20 mt-3 w-40 bg-blue-300 text-black rounded shadow-lg text-center z-10">
                  <li><Link to="/activity">My Activity</Link></li>
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/profile">View Profile</Link></li>
                </ul>
              )}
            </li>
          )}

          {/* Login / Logout */}
          <li>
            <button
              className={`btn ${isLoggedIn ? " bg-white px-2 rounded-2xl font-semibold text-blue-500" : " bg-blue-400 px-2 rounded-2xl font-semibold text-white"}`}
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
