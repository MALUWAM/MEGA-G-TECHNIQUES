import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary routing components
import Header from "./layouts/Header"; // Import Header
import FooterTemp from "./layouts/FooterTemp"; // Import FooterTemp
import { ThreeDot } from "react-loading-indicators";
import { initScrollAnimations } from "./components/scrollAnimation";

// Lazy loading the pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const Quote = lazy(() => import("./pages/Quote"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  useEffect(() => {
    initScrollAnimations(); // Run scroll animation
  }, []);
  return (
    <div className="App">
      <Router>
        {" "}
        {/* Wrap everything inside Router */}
        <Header />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Ensures it takes the full viewport height
              }}
            >
              <ThreeDot variant="bounce" color="#3184cc" size="medium" />
            </div>
          }
        >
          <Routes>
            {" "}
            {/* Defining routes */}
            <Route path="/" exact element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/request-a-quote" element={<Quote />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <FooterTemp />
      </Router>
    </div>
  );
}

export default App;
