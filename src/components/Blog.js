import React, { useState } from "react";
import "./Blog.css"; // Import the CSS file

// import One from "../assets/mega-g-tech/HomeAutomation.jpg";
// import Two from "../assets/mega-g-tech/solar_infograph.png";
import Three from "../assets/mega-g-tech/3DPrinting.png";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <section className="blog-section">
      <h1 className="title">Latest Blog Posts</h1>
      <div className="blog-container">
        {/* Blog Post 1 - Smart Home Automation */}
        {/* <div className="blog-card">
          <img src={One} alt="Smart Home Automation" />
          <div className="blog-content">
            <h2>Understanding Smart Home Automation</h2>
            <p>
              <strong>Smart home automation</strong> allows you to control
              devices like lighting, security, and climate using your phone or
              voice assistant...
            </p>
            {expandedPost === 1 && (
              <div className="details">
                <p>
                  <strong>Benefits:</strong>
                </p>
                <ul className="benefits-list">
                  <li>
                    ✅ <strong>Convenience</strong> – Control devices remotely.
                  </li>
                  <li>
                    ✅ <strong>Energy Efficiency</strong> – Reduce electricity
                    bills.
                  </li>
                  <li>
                    ✅ <strong>Security</strong> – Smart locks and cameras
                    enhance safety.
                  </li>
                  <li>
                    ✅ <strong>Customization</strong> – Set personalized
                    automation routines.
                  </li>
                </ul>
              </div>
            )}
            <button className="btn-link" onClick={() => toggleReadMore(1)}>
              {expandedPost === 1 ? "Read Less" : "Read More →"}
            </button>
          </div>
        </div> */}

        {/* Blog Post 2 - Solar Solutions */}
        {/* <div className="blog-card">
          <img src={Two} alt="Solar Solutions" />
          <div className="blog-content">
            <h2>Solar Solutions for Your Home</h2>
            <p>
              Discover how <strong>solar energy solutions</strong> can lower
              electricity costs while promoting sustainability...
            </p>
            {expandedPost === 2 && (
              <div className="details">
                <p>
                  <strong>Best Solar Solutions:</strong>
                </p>
                <ul className="benefits-list">
                  <li>
                    ✅ <strong>Solar Panels</strong> – Convert sunlight into
                    electricity.
                  </li>
                  <li>
                    ✅ <strong>Solar Batteries</strong> – Store energy for night
                    use.
                  </li>
                  <li>
                    ✅ <strong>Smart Solar Systems</strong> – Monitor power
                    consumption.
                  </li>
                </ul>
              </div>
            )}
            <button className="btn-link" onClick={() => toggleReadMore(2)}>
              {expandedPost === 2 ? "Read Less" : "Read More →"}
            </button>
          </div>
        </div> */}

        {/* Blog Post 3 - 3D Printing */}
        <div className="blog-card">
          <img src={Three} alt="3D Printing" />
          <div className="blog-content">
            <h2>3D Printing: The Future of Manufacturing</h2>
            <p>
              Explore how <strong>3D printing</strong> is revolutionizing
              industries by making production faster and more cost-effective...
            </p>
            {expandedPost === 3 && (
              <div className="details">
                <p>
                  <strong>Key Benefits of 3D Printing:</strong>
                </p>
                <ul className="benefits-list">
                  <li>
                    ✅ <strong>Customization</strong> – Tailor-made designs for
                    specific needs.
                  </li>
                  <li>
                    ✅ <strong>Cost-Effective</strong> – Reduces manufacturing
                    expenses.
                  </li>
                  <li>
                    ✅ <strong>Sustainable</strong> – Minimizes material waste.
                  </li>
                </ul>
              </div>
            )}
            <button className="btn-link" onClick={() => toggleReadMore(3)}>
              {expandedPost === 3 ? "Read Less" : "Read More →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
