export default function AdminProfile() {
  return (
    <div className="admin-page">
      <h2 className="page-title">My Profile</h2>

      <div className="simple-profile">

        <label>Name</label>
        <input type="text" value="Admin User" />

        <label>Email</label>
        <input type="email" value="admin@example.com" />

        <label>Role</label>
        <input type="text" value="Administrator" />

        <button className="save-btn">Save Changes</button>

      </div>
    </div>
  );
}
