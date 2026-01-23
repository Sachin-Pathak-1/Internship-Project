export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>My Website</h3>
          <p>
            We build scalable web solutions and creative designs to help
            businesses grow digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">🌐 LinkedIn</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">📷 Instagram</a>
            <a href="#">💻 GitHub</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}