import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
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
        </div>
      </section>

      <Footer />
    </>
  );
}
