import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Encode data for URL
    const subject = encodeURIComponent(
      `New Contact Form Submission from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open default email client
    window.location.href = `mailto:maluwa2324@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Inquiry Form */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <h2>Our Contact Information</h2>

        <p>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:molokomgm@gmail.com" className="contact-link">
            {" "}
            Email: molokomgm@gmail.com
          </a>
        </p>

        <p>
          <FaPhone className="contact-icon" />
          <a href="tel:+27817252568" className="contact-link">
            {" "}
            Phone: +27 81 725 2568
          </a>
        </p>

        <p>
          <FaMapMarkerAlt className="contact-icon" />
          <span>
            {" "}
            Address: 2696 James Watt Cres, Mafikeng Industrial, Mafikeng, 2745
          </span>
        </p>
      </section>

      {/* Google Maps Integration */}
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50794.49819010439!2d25.588679182055575!3d-25.843973567632936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea2cb10a0a7aeaf%3A0xb93978569f8f9d26!2s2696%20James%20Watt%20Cres%2C%20Mafikeng%20Industrial%2C%20Mahikeng%2C%202745!5e1!3m2!1sen!2sza!4v1741326150967!5m2!1sen!2sza"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
