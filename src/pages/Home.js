import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling
import Blog from "../components/Blog";

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
