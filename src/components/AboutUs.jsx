import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-pic-container">
          <img
            className="about-pic"
            src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/bhp/hero/desktop/2024/september/my25-dodge-bhp-hero-03-mobile.jpg"
            alt="about-img"
          />
        </div>
        <div className="text-overlay">
          <p>Available for orders now</p>
          <h1>LEASE A 2024 DODGE CHARGER DAYTONA R/T</h1>
          <p>for</p>
          <h1>$611 PER MONTH FOR 36 MONTHS</h1>
          <h3>
            $5,239 Due at Signing. No deposit required. Lease payment term has
            factored in a $7,500 EV Incentive, provided by lender.
          </h3>
        </div>
      </div>
    </div>
  );
}
