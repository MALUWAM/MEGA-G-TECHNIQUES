import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling
import Blog from "../components/Blog";

import solar from "../assets/PRESENTATION/WhatsApp Image 2024-12-20 at 13.59.27.jpeg";
import printing from "../assets/PRESENTATION/WhatsApp Image 2025-03-03 at 20.27.11 (1).jpeg";
import graphics from "../assets/graphics.jpg";


const images = [
  solar,
  graphics,
  printing,
];

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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">


      <section>
        <div className="container">
        <h1 className="title">MEGA G TECHNIQUES</h1>
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
      {/* <section class="image-section">
        <img src="" alt="Description of Image" />
    </section> */}
    <section className="introduction">
      <div className="intro-text">
        <p>
          Mega G Techniques is a cutting-edge 3D printing and Renewable energy niche
          company dedicated to transforming ideas into tangible products. Our mission
          is simply to deliver innovative, high-quality, and customizable 3D printable
          solutions integrated with electronics and heavy current products (Renewable
          energy) to produce extraordinary functional solutions.
        </p>
        <p>
          We do multi-skills service and product delivery such as Electricity installations
          (House wiring) and repairs, 3D graphics design, and Printing. We house skills such
          as electrical and Mechanical Engineering, 3D graphics design, 3D printing, and
          Renewable energy technology.
        </p>
      </div>
      <div className="intro-slider">
        <img src={images[currentImage]} alt="Showcase" className="intro-img" />

      </div>
    </section>
      <Blog/>


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
