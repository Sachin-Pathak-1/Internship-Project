import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li>
            <Link to="/admin/dashboard" className={`menu-item ${isActive("/admin/dashboard")}`}>
              <span className="menu-icon">📊</span>
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className={`menu-item ${isActive("/admin/profile")}`}>
              <span className="menu-icon">👤</span>
              <span className="menu-text">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/appointments" className={`menu-item ${isActive("/admin/appointments")}`}>
              <span className="menu-icon">📅</span>
              <span className="menu-text">Appointments</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
