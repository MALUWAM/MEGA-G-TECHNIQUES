import React from "react";
import { FaBuilding, FaUsers, FaCertificate } from "react-icons/fa";
import "./About.css";

// Importing Partner Logos
import partner1 from "../assets/MY LOGOS/midi-removebg-preview.png";
import partner2 from "../assets/MY LOGOS/agency-removebg-preview.png";
import partner3 from "../assets/MY LOGOS/midhub-removebg-preview.png";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Our Story */}
      <section className="about-section">
        <FaBuilding className="about-icon" />
        <h2>Our Story</h2>
        <p>
          • <strong>Mega G Techniques</strong> is a cutting-edge 3D printing and{" "}
          <strong>Renewable energy</strong> niche company dedicated to
          transforming ideas into tangible products. Our mission is simply to
          deliver <strong>innovative</strong>, <strong>high-quality</strong>,
          and customizable 3D printable solutions integrated with electronics
          and heavy current products (<strong>Renewable energy</strong>) to
          produce extraordinary functional solutions such as innovative
          renewable energy technology and home décor such as customized{" "}
          <strong>neon signages</strong>, <strong>lights</strong>,{" "}
          <strong>abstract artistic pot plants</strong>, and{" "}
          <strong>logos</strong> among many other things imaginable for
          individuals and businesses across various industries. We are also able
          to produce high-end precise products for other industries that need
          them.
          <br />
          <br />• We do multi-skilled service and product delivery such as{" "}
          <strong>electricity installations (house wiring)</strong> and repairs,{" "}
          <strong>3D graphics design</strong> and <strong>printing</strong> also
          known as <strong>additive manufacturing</strong>. We do these services
          for many different clients. We house skills such as{" "}
          <strong>electrical and mechanical engineering</strong>,{" "}
          <strong>3D graphics design</strong>, <strong>3D printing</strong>, and{" "}
          <strong>renewable energy technology</strong>.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section">
        <FaUsers className="about-icon" />
        <h2>Our Vision & Mission</h2>
        <p>
          <strong>Vision:</strong> <br />• To manufacture and distribute
          renewable energy technology for <strong>Transportation</strong>,{" "}
          <strong>Industrial</strong>, <strong>civilian</strong>, and{" "}
          <strong>public use</strong> using{" "}
          <strong>additive manufacturing</strong> also known as{" "}
          <strong>3D printing</strong> at a large scale. <br />• To
          revolutionize manufacturing and creativity by making{" "}
          <strong>3D printing</strong> accessible, sustainable, and
          transformative for individuals and industries worldwide, empowering
          limitless innovation and personalized solutions through the
          integration of <strong>additive manufacturing</strong> and{" "}
          <strong>electrical engineering</strong>.
        </p>
        <p>
          <strong>Mission:</strong> <br />• To provide clean and renewable
          energy where conventional renewable energy technology such as{" "}
          <strong>wind</strong> and <strong>solar</strong> cannot, to reduce the{" "}
          <strong>carbon footprint</strong>, to reduce traveling costs by
          encouraging <strong>electric mobility</strong> and to create a
          sustainable market by creating jobs through the emergence of{" "}
          <strong>renewable technology</strong>. <br />• To empower creativity,
          innovation, and sustainability by providing cutting-edge{" "}
          <strong>3D printing solutions</strong>. We are dedicated to
          transforming ideas into reality with precision, efficiency, and a
          commitment to quality. Through collaboration and advanced technology,
          we aim to inspire industries, support creators, and shape a future
          driven by limitless possibilities.
        </p>

        <p>
          <strong>Mission:</strong> To deliver{" "}
          <strong>high-quality, innovative solutions</strong> through
          <strong> cutting-edge technology</strong>, expert craftsmanship, and a
          <strong> customer-first approach</strong>, ensuring{" "}
          <strong>efficiency, sustainability, and affordability.</strong>
        </p>
      </section>

      {/* Certifications & Partnerships */}
      <section className="about-section">
        <FaCertificate className="about-icon" />
        <h2>Certifications & Partnerships</h2>
        <p>
          We are proud partners with industry leaders and certified
          professionals in
          <strong>
            {" "}
            electrical engineering, 3D printing technologies, and renewable
            energy solutions.
          </strong>
          Our collaborations with{" "}
          <strong> leading technology providers </strong> allow us to deliver
          <strong> state-of-the-art </strong> solutions to our clients.
        </p>

        {/* Partner Logos */}
        <div className="partner-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
        </div>
      </section>
    </div>
  );
};

export default About;
