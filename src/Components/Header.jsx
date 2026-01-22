import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><b>NextGen Digital</b></div>

      <nav>
        <ul>
          <li>Home</li>
         <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
