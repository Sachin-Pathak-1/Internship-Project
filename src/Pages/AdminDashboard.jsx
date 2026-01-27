import React from "react";
import AdminSidebar from "../Component/AdminSidebar";
import "./AdminLayout.css";

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main-content">
        <div className="admin-header">
          <h1>Dashboard</h1>
          <p>Welcome to the Admin Dashboard</p>
        </div>
        <div className="admin-content">
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <div className="stat-details">
                <h3>Total Appointments</h3>
                <p className="stat-number">128</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-details">
                <h3>Total Users</h3>
                <p className="stat-number">456</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-details">
                <h3>Completed</h3>
                <p className="stat-number">89</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <div className="stat-details">
                <h3>Pending</h3>
                <p className="stat-number">39</p>
              </div>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Recent Activity</h2>
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>User</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2026-01-27</td>
                  <td>John Doe</td>
                  <td>Appointment Booked</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>2026-01-26</td>
                  <td>Jane Smith</td>
                  <td>Appointment Completed</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>2026-01-25</td>
                  <td>Mike Johnson</td>
                  <td>Profile Updated</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>2026-01-24</td>
                  <td>Sarah Wilson</td>
                  <td>Appointment Booked</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dashboard-section">
            <h2>Quick Stats</h2>
            <div className="quick-stats">
              <div className="stat-box">
                <p>Conversion Rate</p>
                <h3>68.5%</h3>
              </div>
              <div className="stat-box">
                <p>Average Rating</p>
                <h3>4.8/5</h3>
              </div>
              <div className="stat-box">
                <p>Customer Satisfaction</p>
                <h3>92%</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
