import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
