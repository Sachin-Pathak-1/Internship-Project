export default function AdminAppointments() {
  return (
    <div className="admin-page">
      <h2 className="page-title">Appointments</h2>

      <div className="appointment-list">

        <div className="appointment-card">
          <h4>Rahul</h4>
          <p>25 Jan 2026 • 10:30 AM</p>
          <span className="status success">Approved</span>
        </div>

        <div className="appointment-card">
          <h4>Sneha</h4>
          <p>26 Jan 2026 • 12:00 PM</p>
          <span className="status warning">Pending</span>
        </div>

      </div>
    </div>
  );
}
