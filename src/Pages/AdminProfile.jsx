import React from "react";
import AdminSidebar from "../Component/AdminSidebar";
import "./AdminLayout.css";

export default function AdminProfile() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main-content">
        <div className="admin-header">
          <h1>Profile</h1>
          <p>Manage your admin profile</p>
        </div>
        <div className="admin-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <span>👤</span>
            </div>
            <div className="profile-info">
              <h2>Admin User</h2>
              <p className="profile-email">admin@example.com</p>
              <p className="profile-role">Administrator</p>
            </div>
          </div>

          <div className="profile-section">
            <h3>Personal Information</h3>
            <form className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" defaultValue="Admin User" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" defaultValue="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter phone number" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea placeholder="Enter address"></textarea>
              </div>
              <button type="submit" className="btn-save">Save Changes</button>
            </form>
          </div>

          <div className="profile-section">
            <h3>Change Password</h3>
            <form className="profile-form">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>
              <button type="submit" className="btn-save">Update Password</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
