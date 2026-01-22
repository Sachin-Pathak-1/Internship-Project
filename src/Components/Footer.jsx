import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <h2>NextGen Digital</h2>
          <p>
            We are a forward-thinking technology company dedicated to
            delivering innovative solutions that help businesses thrive
            in the digital age.
          </p>

          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
              <li>About us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li>App Development</li>
            <li>Platform Development</li>
            <li>Mobile Solutions</li>
            <li>AI & Automation</li>
            <li>Cloud Hosting</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>📞 +91 75065 41325</p>
          <p>🕒 Mon–Fri 10am–6pm</p>
          <p>✉️ NextGen Digital26@gmail.com</p>
          <p>📍 Brovali, Mumbai, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 NextGen Digital All rights reserved.</p>
        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
