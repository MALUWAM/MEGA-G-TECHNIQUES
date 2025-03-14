import React, { useState } from 'react';
import { FaBolt, FaPrint, FaPalette, FaSolarPanel } from 'react-icons/fa';
import './Services.css';

import one from "../assets/mega-g-tech/mega-g-tech2.jpg";
import two from "../assets/mega-g-tech/mega-g-tech1.jpeg";
import three from "../assets/mega-g-tech/mega-g-tech3.jpg";
import four from "../assets/mega-g-tech/mega-g-tech4.jpg";

import printOne from "../assets/mega-g-tech/3D printed.jpg";
import printTwo from "../assets/mega-g-tech/1.jpg";
import printThree from "../assets/mega-g-tech/2.jpg";
import printFour from "../assets/mega-g-tech/3.jpg";

import oneDesign from "../assets/mega-g-tech/5.jpg";
import twoDesign from "../assets/mega-g-tech/6.jpg";
import threeDesign from "../assets/mega-g-tech/7.jpg";
import fourDesign from "../assets/mega-g-tech/8.jpg";

import oneRenewable from "../assets/mega-g-tech/13.jpg";
import twoRenewable from "../assets/mega-g-tech/11.jpg";
import threeRenewable from "../assets/mega-g-tech/9.jpg";
import fourRenewable from "../assets/mega-g-tech/10.jpg";

const serviceData = [
  {
    icon: <FaBolt className="service-icon" />, 
    title: "Electrical Solutions",
    images: [one, two, three, four]
  },
  {
    icon: <FaPrint className="service-icon" />,
    title: "3D Printing",
    images: [printOne, printTwo, printThree, printFour]
  },
  {
    icon: <FaPalette className="service-icon" />,
    title: "3D Graphic Design",
    images: [oneDesign, twoDesign, threeDesign, fourDesign]
  },
  {
    icon: <FaSolarPanel className="service-icon" />,
    title: "Renewable Energy",
    images: [oneRenewable, twoRenewable, threeRenewable, fourRenewable]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (serviceIndex, imageIndex) => {
    setSelectedService(serviceIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedService(null);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex < serviceData[selectedService].images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : serviceData[selectedService].images.length - 1
    );
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <section key={index} className="service-card">
            {service.icon}
            <h2>{service.title}</h2>
            <div className="image-gallery">
              {service.images.map((image, i) => (
                <div key={i} className="image-wrapper" onClick={() => openModal(index, i)}>
                  <img src={image} alt={service.title} className="gallery-image" />
                  <span className="view-text">View</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedService !== null && selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{serviceData[selectedService].title} Gallery</h2>
            <button className="prev-button" onClick={prevImage}>&#8592;</button>
            <img 
              src={serviceData[selectedService].images[selectedImageIndex]} 
              alt="Full-size view" 
              className="medium-image" 
            />
            <button className="next-button" onClick={nextImage}>&#8594;</button>
            <button className="close-button" onClick={closeModal}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
