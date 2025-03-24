import React, { useEffect } from "react";
import "./Services.css"; // Import CSS for styling

// Import images
import electrical from "../assets/Industrial and residential electrical installations.jpeg";
import printing from "../assets/download.jpg";
import graphics from "../assets/graphics.jpg";
import solar from "../assets/Solar.jpg";

const Services = () => {
  // Scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="ourServices">
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
              <li><strong>Industrial and residential electrical installations.</strong></li>
              <li><strong>Maintenance and troubleshooting.</strong></li>
              <li><strong>Smart home automation.</strong></li>
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
              <li><strong>Custom prototyping and production.</strong></li>
              <li><strong>Materials and technologies used.</strong></li>
              <li><strong>Pricing and order process.</strong></li>
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
              <li><strong>Logo and branding.</strong></li>
              <li><strong>3D modeling and rendering.</strong></li>
              <li><strong>Motion graphics.</strong></li>
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
              <li><strong>Solar panel installations and solutions.</strong></li>
              <li><strong>Energy audits and consultations.</strong></li>
              <li><strong>Sustainable energy storage options.</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
