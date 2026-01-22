import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Transforming Ideas into Digital Reality <br />
            <span>Smart Digital Solutions</span>
          </h1>

          <p>We help businesses grow through powerful digital experiences.</p>

          <div className="buttons">
            <button className="primary">Click Here</button>
            <button className="secondary">▶ Watch Demo</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
