export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <h2 className="page-title">Overview</h2>

      <div className="dash-grid">

        <div className="dash-box">
          <h4>Users</h4>
          <p className="dash-number">124</p>
        </div>

        <div className="dash-box">
          <h4>Appointments</h4>
          <p className="dash-number">38</p>
        </div>

        <div className="dash-box">
          <h4>Pending</h4>
          <p className="dash-number">5</p>
        </div>

      </div>

      <div className="info-panel">
        <h3>System Updates</h3>
        <p>• New user registered</p>
        <p>• Appointment approved</p>
        <p>• Profile edited</p>
      </div>
    </div>
  );
}
