
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components for routing

import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Programs from './Pages/Programs/Program';
import About from './Pages/AboutUs./AboutUs'; // Example additional page
import Contact from './Pages/Contact Us /ContactUs'; // Example additional page
import Membership from './Pages/Membership/Membership'
import BoardOfTrustees from './Pages/BoardOfTrustees/BoardOfTrustees'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       
        {/* Define different routes for different pages */}
        <Route path="/" element={<Home/>} /> {/* Home page */}
        <Route path="/membership" element={< Membership/>} /> {/* Page with slider */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/program" element={<Programs />} /> {/* Program Page */}
        <Route path="/Board-of-trustees" element={<BoardOfTrustees/>} /> {/* Board Of Trustees Page */}
      </Routes>
    </Router>
  );
};

export default App;

