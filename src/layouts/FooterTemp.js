import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import the icons
import { MdOutlineMail } from "react-icons/md";
import './FooterTemp.css'; // Import the external CSS file

function FooterTemp() {
  return (
    <footer className="footer-temp">
      <div className="footer-content">
        <p className='footer-content-p'>&copy; 2024 MEGA G TECHNIQUES. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://x.com" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://mail.google.com/mail/u/0/#sent?compose=new" className="social-icon">
            <MdOutlineMail />
          </a>
          <a href="https://www.linkedin.com/" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.whatsapp.com/" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterTemp;
