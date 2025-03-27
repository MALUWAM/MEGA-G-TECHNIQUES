import React, { useState, useEffect } from "react";
import "./Services.css";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

// Import all images from their respective folders
const importAll = (r) => r.keys().map(r);
const electricalImages = importAll(require.context("../assets/ELECTRICITY INSTATLLATIONS", false, /\.(png|jpe?g|svg)$/));
const printingImages = importAll(require.context("../assets/3D PRINTING", false, /\.(png|jpe?g|svg)$/));
const graphicsImages = importAll(require.context("../assets/3D GRAPHICS DESIGN", false, /\.(png|jpe?g|svg)$/));
const renewableImages = importAll(require.context("../assets/RENEWABLE ENERGY GEN PROJECT & ELECTRIC MOBILITY", false, /\.(png|jpe?g|svg)$/));

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]); // Ensure it updates if images change

  // Manual controls
  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div className="image-gallery">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width="200" />
      <div>
        <button onClick={prevImage}><HiArrowCircleLeft /></button>
        <button onClick={nextImage} style={{ marginLeft: "10px" }}><HiArrowCircleRight /></button>
      </div>
    </div>
  );
};

const Services = () => {
  // Scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? entry.target.classList.add("animate") : entry.target.classList.remove("animate");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="ourServices">
      <h1 className="title">MEGA G TECHNIQUES</h1>
      <div className="service-grid">
        
        {/* Electrical Solutions */}
        <div className="service-card scroll-animate">
          <div className="service-image"><ImageGallery images={electricalImages} /></div>
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
          <div className="service-image"><ImageGallery images={printingImages} /></div>
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
          <div className="service-image"><ImageGallery images={graphicsImages} /></div>
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
          <div className="service-image"><ImageGallery images={renewableImages} /></div>
          <div className="service-content">
            <h2>Renewable Energy</h2>
            <ul>
              <li><strong>Solar panel installations.</strong></li>
              <li><strong>Electric mobility solutions.</strong></li>
              <li><strong>Energy storage systems.</strong></li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
