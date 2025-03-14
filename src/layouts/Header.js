import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/mega-g-tech-logo.png";
import { MdMenu } from "react-icons/md"; // Import MdMenu icon
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      
      {/* Menu icon for mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <MdMenu size={30} color="white" />
      </div>

      {/* Button Group for larger screens */}
      <div className="button-group">
    
        <Link to="/services" className="cta-button">
          Our Services
        </Link>
        <Link to="/request-a-quote" className="cta-button">
          Request a Quote
        </Link>
        <Link to="/contactUs" className="cta-button">
          Contact Us
        </Link>
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" >
          <Link to="/" className="cta-button" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" className="cta-button" onClick={closeMenu}>
            Our Services
          </Link>
          <Link to="/request-a-quote" className="cta-button" onClick={closeMenu}>
            Request a Quote
          </Link>
          <Link to="/contactUs" className="cta-button" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to="/about" className="cta-button"onClick={closeMenu}>
            Learn More
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
