import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>

        <nav className="admin-menu">
            <NavLink to="/admin" end>Dashboard</NavLink>
            <NavLink to="/admin/profile">Profile</NavLink>
            <NavLink to="/admin/appointments">Appointments</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
}
