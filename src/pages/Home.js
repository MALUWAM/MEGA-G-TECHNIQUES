import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import electrical from "../assets/Industrial and residential electrical installations.jpeg";
import printing from "../assets/download.jpg";
import graphics from "../assets/graphics.jpg";
import solar from "../assets/Solar.jpg";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Remove the 'visible' class when the element is out of view
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view
  
    // Select all elements with the scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((element) => {
      observer.observe(element); // Keep observing even after visibility
    });
  
    // Clean up the observer on component unmount
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  

  return (
    <div className="home">
      {/* service section using web layout*/}
      <section className="services">
        <h1 className="title">MEGA G TECHNIQUES</h1>
        <div className="service-grid">
          {/* Electrical Solutions */}
          <div className="service-card scroll-animate">
            <div className="service-image">
              <img src={electrical} alt="Electrical Solutions" />
            </div>
            <div className="service-content">
              <h2>Electrical Solutions</h2>
              <ul>
                <li>-Industrial and residential electrical installations.</li>
                <li>-Maintenance and troubleshooting.</li>
                <li>-Smart home automation.</li>
              </ul>
            </div>
          </div>

          {/* 3D Printing */}
          <div className="service-card scroll-animate">
            <div className="service-image">
              <img src={printing} alt="3D Printing" />
            </div>
            <div className="service-content">
              <h2>3D Printing</h2>
              <ul>
                <li>-Custom prototyping and production.</li>
                <li>-Materials and technologies used.</li>
                <li>-Pricing and order process.</li>
              </ul>
            </div>
          </div>

          {/* 3D Graphic Design */}
          <div className="service-card scroll-animate">
            <div className="service-image">
              <img src={graphics} alt="3D Graphic Design" />
            </div>
            <div className="service-content">
              <h2>3D Graphic Design</h2>
              <ul>
                <li>Logo and branding.</li>
                <li>-3D modeling and rendering.</li>
                <li>-Motion graphics.</li>
              </ul>
            </div>
          </div>

          {/* Renewable Energy */}
          <div className="service-card scroll-animate">
            <div className="service-image">
              <img src={solar} alt="Renewable Energy" />
            </div>
            <div className="service-content">
              <h2>Renewable Energy</h2>
              <ul>
                <li>-Solar panel installations and solutions.</li>
                <li>-Energy audits and consultations.</li>
                <li>-Sustainable energy storage options.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="title">Service</h1>
          <div className="services">
            <div className="service-list scroll-animate">
              <ul>
                <li>-Electrical Solutions</li>
                <li>-Industrial and residential electrical installations</li>
                <li>-Maintenance and troubleshooting</li>
                <li>-Smart home automation</li>
                <li>-3D Printing</li>
                <li>-Custom prototyping and production</li>
                <li>-Materials and technologies used</li>
              </ul>
            </div>
            <div className="service-list scroll-animate">
              <ul>
                <li>-Solar panel installations and solutions</li>
                <li>-Energy audits and consultations</li>
                <li>-Renewable Energy</li>
                <li>-Motion graphics</li>
                <li>-Logo and branding</li>
                <li>-3D Graphic Design</li>
                <li>-Pricing and order process</li>
                <li>-Sustainable energy storage options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="preview scroll-animate">
        <h1>About Us</h1>
        <p>
          We are committed to delivering high-quality services that help you
          grow and succeed.
          <Link to="/about" className="btn-link">
            {" "}
            Learn More →
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Home;
