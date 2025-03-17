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
    </div>
  )
}

export default Quote
