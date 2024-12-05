import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/global/footer/dodge_garage.png"
            alt="Dodge Logo"
            className="footer-logo-img"
          />
        </div>
        <div className="footer-address">
          <p>123 Dodge Street, Detroit, MI</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
