import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-dropdown">
      <button onClick={() => setOpen(!open)}>Profile</button>
      {open && (
        <ul className="dropdown-menu">
          <Link to="/myactivity">My Activity</Link>
          <Link to="/history">History</Link>
          <Link to="/viewprofile">View Profile</Link>        </ul>
      )}
    </div>
  );
}

export default ProfileDropdown;