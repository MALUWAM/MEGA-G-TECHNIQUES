import React from 'react'
import { FaBuilding, FaUsers, FaCertificate } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="about-section">
        <FaBuilding className="about-icon" />
        <h2>Our Story</h2>
        <p>We started with a mission to revolutionize [industry] by providing [solution]. Our goal is to empower individuals and businesses with innovative solutions.</p>
      </section>

      <section className="about-section">
        <FaUsers className="about-icon" />
        <h2>Our Vision & Mission</h2>
        <p><strong>Vision:</strong> To be the leading platform for [goal].</p>
        <p><strong>Mission:</strong> To deliver [value proposition] through cutting-edge technology and customer-first approaches.</p>
      </section>

      <section className="about-section">
        <FaCertificate className="about-icon" />
        <h2>Certifications & Partnerships</h2>
        <p>We are proud partners with industry leaders such as [Partner 1, Partner 2].</p>
      </section>
    </div>
  )
}

export default About
