import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img from '../../assets/th.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <img src={img} alt="Site Logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/membership" onClick={() => setIsMenuOpen(false)}>Membership</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        <li><Link to="/program" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
        <li><Link to="/Board-of-trustees" onClick={() => setIsMenuOpen(false)}>Board Of Trustees</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
