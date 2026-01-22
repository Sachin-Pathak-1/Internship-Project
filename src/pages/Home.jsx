import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <main className="home hero-bg" id="home">
        <div className="container home-content">
          <h2>Welcome to My Website</h2>
          <p>
            A clean, professional homepage built using reusable components
            with modern UI practices.
          </p>
          <button className="primary-btn">Get Started</button>
        </div>
      </main>

      {/* SERVICES */}
      <section className="section section-light" id="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <p className="section-text">
            I provide modern, responsive, and scalable web solutions using the
            latest frontend technologies.
          </p>
        
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Responsive websites built with modern UI and clean code.</p>
            </div>
        
            <div className="service-card">
              <h3>React Applications</h3>
              <p>Reusable component-based apps with great performance.</p>
            </div>
        
            <div className="service-card">
              <h3>UI Design</h3>
              <p>Simple, clean, and user-friendly interface designs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            This website is built using React with reusable components and
            modern UI design. It focuses on clean layout, simplicity, and
            responsiveness.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-light" id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Have questions or want to work together? Reach out anytime.
          </p>

          <div className="contact-box">
            <p><strong>Email:</strong> example@email.com</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}