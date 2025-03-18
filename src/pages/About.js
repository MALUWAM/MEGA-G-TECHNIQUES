import React from 'react';
import { FaBuilding, FaUsers, FaCertificate } from 'react-icons/fa';
import './About.css';

// Importing Partner Logos
import partner1 from '../assets/MY LOGOS/midi-removebg-preview.png';
import partner2 from '../assets/MY LOGOS/agency-removebg-preview.png';
import partner3 from '../assets/MY LOGOS/midhub-removebg-preview.png';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Our Story */}
      <section className="about-section">
        <FaBuilding className="about-icon" />
        <h2>Our Story</h2>
        <p>
          Mega G Techniques started with a mission to revolutionize the 
          <strong> technology and energy sectors </strong> by providing cutting-edge 
          <strong> electrical, 3D printing, graphic design, and renewable energy solutions. </strong>  
          Our goal is to <strong> empower individuals and businesses </strong> with 
          innovative, sustainable, and efficient technologies that enhance 
          productivity and improve everyday life.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section">
        <FaUsers className="about-icon" />
        <h2>Our Vision & Mission</h2>
        <p><strong>Vision:</strong> To become a <strong>trusted leader</strong> in 
          <strong> electrical engineering, 3D printing, and renewable energy solutions</strong>, 
          creating a <strong>sustainable and technologically advanced future.</strong>
        </p>
        <p><strong>Mission:</strong> To deliver <strong>high-quality, innovative solutions</strong> through 
          <strong> cutting-edge technology</strong>, expert craftsmanship, and a 
          <strong> customer-first approach</strong>, ensuring <strong>efficiency, sustainability, and affordability.</strong>
        </p>
      </section>

      {/* Certifications & Partnerships */}
      <section className="about-section">
        <FaCertificate className="about-icon" />
        <h2>Certifications & Partnerships</h2>
        <p>
          We are proud partners with industry leaders and certified professionals in 
          <strong> electrical engineering, 3D printing technologies, and renewable energy solutions.</strong>  
          Our collaborations with <strong> leading technology providers </strong> allow us to deliver 
          <strong> state-of-the-art </strong> solutions to our clients.
        </p>
        
        {/* Partner Logos */}
        <div className="partner-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
        </div>
      </section>
    </div>
  );
}

export default About;
