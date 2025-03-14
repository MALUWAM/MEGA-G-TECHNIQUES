import React from 'react'
import { FaUser, FaEnvelope, FaListAlt, FaCommentDots } from 'react-icons/fa'
import './Quote.css'

const Quote = () => {
  return (
    <div className="quote-container">
      <h1>Request a Quote</h1>
      <p>Fill in the form below to get a personalized quote for our services.</p>

      <form className="quote-form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="input-group">
          <FaListAlt className="input-icon" />
          <select required>
            <option value="">Select a Service</option>
            <option value="electrical">Electrical Solutions</option>
            <option value="3d-printing">3D Printing</option>
            <option value="graphic-design">3D Graphic Design</option>
            <option value="renewable-energy">Renewable Energy</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="input-group">
          <FaCommentDots className="input-icon" />
          <textarea placeholder="Write a brief of what you are looking for" rows="4" required></textarea>
        </div>

        <button type="submit">Get Quote</button>
      </form>

      <section className="contact-map">
        <h1>Find Us Here</h1>
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
  )
}

export default Quote
