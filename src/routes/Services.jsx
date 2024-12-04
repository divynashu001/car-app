import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
const Services = () => {
  return (
    <div className="services-container">
      <Navbar/>
      <h2>Our Services</h2>
      <ul>
        <li>Car Sales</li>
        <li>Car Leasing</li>
        <li>Car Maintenance</li>
        <li>Car Customization</li>
      </ul>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Services;
